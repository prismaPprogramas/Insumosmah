import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useCarrito } from "../CarritoContext";
import { productos } from "./arrayProductos";
import { useNavigate } from "react-router-dom";

const POR_PAGINA = 20;

const Productos = () => {
  /* =========================================
     CARRITO - CONTEXT
  ========================================= */

  const {
    carrito,
    cantidadCarrito,
    totalCarrito,
    carritoAbierto,
    productoAgregado,
    abrirCarrito,
    cerrarCarrito,
    agregarAlCarrito,
    sumarUnidad,
    restarUnidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useCarrito();

  const navigate = useNavigate();

  /* =========================================
     ESTADOS FILTROS
  ========================================= */

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [orden, setOrden] = useState("destacados");

  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  const [soloStock, setSoloStock] = useState(false);
  const [soloDestacados, setSoloDestacados] =
    useState(false);

  const [filtrosAbiertos, setFiltrosAbiertos] =
    useState(false);

  const [cantidadVisible, setCantidadVisible] =
    useState(POR_PAGINA);

  const [toolbarFija, setToolbarFija] =
    useState(false);

  /* =========================================
     REFERENCIAS
  ========================================= */

  const toolbarRef = useRef(null);

  /* =========================================
     CATEGORÍAS
  ========================================= */

  const categorias = useMemo(() => {
    const categoriasUnicas = [
      ...new Set(
        productos
          .map((producto) => producto.categoria)
          .filter(Boolean)
      ),
    ];

    return ["Todos", ...categoriasUnicas];
  }, []);

  /* =========================================
     TOOLBAR FLOTANTE
  ========================================= */

  useEffect(() => {
    const controlarToolbar = () => {
      if (!toolbarRef.current) return;

      const posicion =
        toolbarRef.current.getBoundingClientRect();

      setToolbarFija(posicion.bottom <= 0);
    };

    window.addEventListener(
      "scroll",
      controlarToolbar,
      {
        passive: true,
      }
    );

    controlarToolbar();

    return () => {
      window.removeEventListener(
        "scroll",
        controlarToolbar
      );
    };
  }, []);

  /* =========================================
     BLOQUEAR SCROLL CON OFFCANVAS
  ========================================= */

  useEffect(() => {
    if (filtrosAbiertos || carritoAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [filtrosAbiertos, carritoAbierto]);

  /* =========================================
     FILTRAR + ORDENAR
  ========================================= */

  const productosFiltrados = useMemo(() => {
    let resultado = [...productos];

    /* BUSCADOR */

    if (busqueda.trim()) {
      const texto = busqueda
        .toLowerCase()
        .trim();

      resultado = resultado.filter(
        (producto) => {
          const nombre =
            producto.nombre?.toLowerCase() || "";

          const categoriaProducto =
            producto.categoria?.toLowerCase() || "";

          return (
            nombre.includes(texto) ||
            categoriaProducto.includes(texto)
          );
        }
      );
    }

    /* CATEGORÍA */

    if (categoria !== "Todos") {
      resultado = resultado.filter(
        (producto) =>
          producto.categoria === categoria
      );
    }

    /* PRECIO MÍNIMO */

    if (precioMin !== "") {
      resultado = resultado.filter(
        (producto) =>
          Number(producto.precio) >=
          Number(precioMin)
      );
    }

    /* PRECIO MÁXIMO */

    if (precioMax !== "") {
      resultado = resultado.filter(
        (producto) =>
          Number(producto.precio) <=
          Number(precioMax)
      );
    }

    /* STOCK */

    if (soloStock) {
      resultado = resultado.filter(
        (producto) => producto.stock === true
      );
    }

    /* DESTACADOS */

    if (soloDestacados) {
      resultado = resultado.filter(
        (producto) =>
          producto.destacado === true
      );
    }

    /* ORDEN */

    if (orden === "menorPrecio") {
      resultado.sort(
        (a, b) =>
          Number(a.precio) -
          Number(b.precio)
      );
    }

    if (orden === "mayorPrecio") {
      resultado.sort(
        (a, b) =>
          Number(b.precio) -
          Number(a.precio)
      );
    }

    if (orden === "nombreAZ") {
      resultado.sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es")
      );
    }

    if (orden === "nombreZA") {
      resultado.sort((a, b) =>
        b.nombre.localeCompare(a.nombre, "es")
      );
    }

    if (orden === "destacados") {
      resultado.sort(
        (a, b) =>
          Number(b.destacado) -
          Number(a.destacado)
      );
    }

    return resultado;
  }, [
    busqueda,
    categoria,
    precioMin,
    precioMax,
    soloStock,
    soloDestacados,
    orden,
  ]);

  /* =========================================
     PRODUCTOS VISIBLES
  ========================================= */

  const productosVisibles =
    productosFiltrados.slice(
      0,
      cantidadVisible
    );

  /* =========================================
     FILTROS ACTIVOS
  ========================================= */

  const cantidadFiltrosActivos = [
    categoria !== "Todos",
    precioMin !== "",
    precioMax !== "",
    soloStock,
    soloDestacados,
  ].filter(Boolean).length;

  /* =========================================
     CAMBIAR CATEGORÍA
  ========================================= */

  const cambiarCategoria = (valor) => {
    setCategoria(valor);
    setCantidadVisible(POR_PAGINA);
  };

  /* =========================================
     LIMPIAR FILTROS
  ========================================= */

  const limpiarFiltros = () => {
    setCategoria("Todos");
    setPrecioMin("");
    setPrecioMax("");
    setSoloStock(false);
    setSoloDestacados(false);

    setCantidadVisible(POR_PAGINA);
  };

  /* =========================================
     MOSTRAR MÁS
  ========================================= */

  const mostrarMas = () => {
    setCantidadVisible(
      (cantidadActual) =>
        cantidadActual + POR_PAGINA
    );
  };

  /* =========================================
     PRECIO
  ========================================= */

  const formatearPrecio = (precio) => {
    return Number(precio).toLocaleString(
      "es-AR"
    );
  };

  /* =========================================
     ABRIR FILTROS
  ========================================= */

  const abrirFiltros = () => {
    cerrarCarrito();
    setFiltrosAbiertos(true);
  };

  /* =========================================
     ABRIR CARRITO DESDE PRODUCTOS
  ========================================= */

  const manejarAbrirCarrito = () => {
    setFiltrosAbiertos(false);
    abrirCarrito();
  };

  /* =========================================
     AGREGAR PRODUCTO
  ========================================= */

  const manejarAgregarAlCarrito = (
    producto
  ) => {
    if (producto.stock === false) return;

    setFiltrosAbiertos(false);

    agregarAlCarrito(producto);
  };

  /* =========================================
     INICIAR COMPRA
  ========================================= */

/* =========================================
   INICIAR COMPRA
========================================= */

const iniciarCompra = () => {
  if (carrito.length === 0) return;

  cerrarCarrito();

  navigate("/checkout");
};

  /* =========================================
     BOTÓN CARRITO TOOLBAR
  ========================================= */

  const renderBotonCarrito = () => {
    if (cantidadCarrito === 0) {
      return null;
    }

    return (
      <button
        className="toolbarCarrito"
        onClick={manejarAbrirCarrito}
      >
        <span className="toolbarCarritoIcono">
          🛒
        </span>

        <span className="toolbarCarritoTexto">
          CARRITO
        </span>

        <span className="toolbarCarritoCantidad">
          {cantidadCarrito}
        </span>
      </button>
    );
  };

  /* =========================================
     TOOLBAR
  ========================================= */

  const renderToolbar = (
    flotante = false
  ) => {
    return (
      <div
        className={
          flotante
            ? "productosToolbar productosToolbarInternaFlotante"
            : "productosToolbar"
        }
      >
        <div className="toolbarIzquierda">
          {/* FILTRAR */}

          <button
            className="botonFiltros"
            onClick={abrirFiltros}
          >
            <span className="filtroIcono">
              ☰
            </span>

            <span>FILTRAR</span>

            {cantidadFiltrosActivos > 0 && (
              <span className="contadorFiltros">
                {cantidadFiltrosActivos}
              </span>
            )}
          </button>

          {/* CATEGORÍA */}

          <div className="selectContenedor">
            <select
              value={categoria}
              onChange={(e) =>
                cambiarCategoria(
                  e.target.value
                )
              }
            >
              {categorias.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat === "Todos"
                    ? "Todas las categorías"
                    : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="toolbarDerecha">
          {/* ORDEN */}

          <div className="ordenContenedor">
            <span className="ordenLabel">
              ORDENAR
            </span>

            <select
              value={orden}
              onChange={(e) =>
                setOrden(e.target.value)
              }
            >
              <option value="destacados">
                Destacados
              </option>

              <option value="menorPrecio">
                Menor precio
              </option>

              <option value="mayorPrecio">
                Mayor precio
              </option>

              <option value="nombreAZ">
                Nombre A-Z
              </option>

              <option value="nombreZA">
                Nombre Z-A
              </option>
            </select>
          </div>

          {/* CARRITO */}

          {renderBotonCarrito()}
        </div>
      </div>
    );
  };

  /* =========================================
     RETURN
  ========================================= */

  return (
    <section
      className="productosSeccion"
      id="catalogo"
    >
      {/* =====================================
          TÍTULO
      ====================================== */}

      <div className="productosTitulo">
        <div>
          <span className="productosMiniTitulo">
            TIENDA MAH
          </span>

          <h2>
            Todos los productos
          </h2>
        </div>

        <span className="productosCantidad">
          {productosFiltrados.length}{" "}
          productos
        </span>
      </div>

      {/* =====================================
          BUSCADOR
      ====================================== */}

      <div className="productosBuscador">
        <span className="buscadorIcono">
          ⌕
        </span>

        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          value={busqueda}
          onChange={(e) => {
            setBusqueda(
              e.target.value
            );

            setCantidadVisible(
              POR_PAGINA
            );
          }}
        />

        {busqueda && (
          <button
            className="limpiarBusqueda"
            onClick={() => {
              setBusqueda("");

              setCantidadVisible(
                POR_PAGINA
              );
            }}
            aria-label="Limpiar búsqueda"
          >
            ×
          </button>
        )}
      </div>

      {/* =====================================
          TOOLBAR ORIGINAL
      ====================================== */}

      <div ref={toolbarRef}>
        {renderToolbar()}
      </div>

      {/* =====================================
          TOOLBAR FLOTANTE
      ====================================== */}

      <div
        className={`toolbarFlotante ${
          toolbarFija
            ? "toolbarFlotanteVisible"
            : ""
        }`}
      >
        <div className="toolbarFlotanteContenido">
          {renderToolbar(true)}
        </div>
      </div>

      {/* =====================================
          FILTROS ACTIVOS
      ====================================== */}

      {cantidadFiltrosActivos > 0 && (
        <div className="filtrosActivos">
          <div className="chipsFiltros">
            {categoria !== "Todos" && (
              <button
                onClick={() =>
                  cambiarCategoria(
                    "Todos"
                  )
                }
              >
                {categoria}
                <span>×</span>
              </button>
            )}

            {precioMin !== "" && (
              <button
                onClick={() =>
                  setPrecioMin("")
                }
              >
                Desde $
                {formatearPrecio(
                  precioMin
                )}
                <span>×</span>
              </button>
            )}

            {precioMax !== "" && (
              <button
                onClick={() =>
                  setPrecioMax("")
                }
              >
                Hasta $
                {formatearPrecio(
                  precioMax
                )}
                <span>×</span>
              </button>
            )}

            {soloStock && (
              <button
                onClick={() =>
                  setSoloStock(false)
                }
              >
                En stock
                <span>×</span>
              </button>
            )}

            {soloDestacados && (
              <button
                onClick={() =>
                  setSoloDestacados(
                    false
                  )
                }
              >
                Destacados
                <span>×</span>
              </button>
            )}
          </div>

          <button
            className="limpiarTodo"
            onClick={limpiarFiltros}
          >
            LIMPIAR TODO
          </button>
        </div>
      )}

      {/* =====================================
          GRID
      ====================================== */}

      {productosVisibles.length > 0 ? (
        <div className="productosGrid">
          {productosVisibles.map(
            (producto) => {
              const estaAgregado =
                productoAgregado ===
                producto.id;

              return (
                <article
                  className="catalogoCard"
                  key={producto.id}
                >
                  {/* IMAGEN */}

                  <div className="catalogoImagen">
                    {producto.destacado && (
                      <span className="catalogoTag">
                        DESTACADO
                      </span>
                    )}

                    <button
                      className="catalogoFavorito"
                      aria-label="Agregar a favoritos"
                      onClick={(e) => {
                        e.stopPropagation();

                        console.log(
                          "Favorito:",
                          producto
                        );
                      }}
                    >
                      ♡
                    </button>

                    {producto.imagen ? (
                      <img
                        src={
                          producto.imagen
                        }
                        alt={
                          producto.nombre
                        }
                      />
                    ) : (
                      <div className="sinImagen">
                        <span>MAH</span>
                        <small>
                          PRODUCTO
                        </small>
                      </div>
                    )}
                  </div>

                  {/* INFO */}

                  <div className="catalogoInfo">
                    <span className="catalogoCategoria">
                      {
                        producto.categoria
                      }
                    </span>

                    <h3>
                      {producto.nombre}
                    </h3>

                    <div className="catalogoCompra">
                      <div className="catalogoPrecio">
                        <strong>
                          $
                          {formatearPrecio(
                            producto.precio
                          )}
                        </strong>

                        {producto.stock ? (
                          <small className="productoDisponible">
                            En stock
                          </small>
                        ) : (
                          <small className="productoSinStock">
                            Sin stock
                          </small>
                        )}
                      </div>

                      <button
                        className={`catalogoAgregar ${
                          estaAgregado
                            ? "catalogoAgregarCheck"
                            : ""
                        }`}
                        disabled={
                          !producto.stock
                        }
                        onClick={(e) => {
                          e.stopPropagation();

                          manejarAgregarAlCarrito(
                            producto
                          );
                        }}
                        aria-label={`Agregar ${producto.nombre}`}
                      >
                        {estaAgregado
                          ? "✓"
                          : "+"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      ) : (
        <div className="sinResultados">
          <span>MAH</span>

          <h3>
            No encontramos productos
          </h3>

          <p>
            Probá cambiando la búsqueda
            o los filtros.
          </p>

          <button
            onClick={() => {
              setBusqueda("");
              limpiarFiltros();
            }}
          >
            VER TODOS LOS PRODUCTOS
          </button>
        </div>
      )}

      {/* =====================================
          MOSTRAR MÁS
      ====================================== */}

      {productosVisibles.length <
        productosFiltrados.length && (
        <div className="mostrarMasContenedor">
          <div className="progresoProductos">
            <span>
              Mostrando{" "}
              <strong>
                {
                  productosVisibles.length
                }
              </strong>{" "}
              de{" "}
              <strong>
                {
                  productosFiltrados.length
                }
              </strong>
            </span>

            <div className="barraProgreso">
              <span
                style={{
                  width: `${
                    (productosVisibles.length /
                      productosFiltrados.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <button
            className="mostrarMas"
            onClick={mostrarMas}
          >
            MOSTRAR 20 MÁS
            <span>↓</span>
          </button>
        </div>
      )}

      {/* =====================================
          OVERLAY
      ====================================== */}

      <div
        className={`productosOverlay ${
          filtrosAbiertos ||
          carritoAbierto
            ? "productosOverlayActivo"
            : ""
        }`}
        onClick={() => {
          setFiltrosAbiertos(false);
          cerrarCarrito();
        }}
      />

      {/* =====================================
          OFFCANVAS FILTROS - IZQUIERDA
      ====================================== */}

      <aside
        className={`filtrosOffcanvas ${
          filtrosAbiertos
            ? "filtrosOffcanvasAbierto"
            : ""
        }`}
      >
        <div className="offcanvasHeader">
          <div>
            <span>
              PERSONALIZÁ TU BÚSQUEDA
            </span>

            <h3>Filtros</h3>
          </div>

          <button
            onClick={() =>
              setFiltrosAbiertos(false)
            }
            aria-label="Cerrar filtros"
          >
            ×
          </button>
        </div>

        <div className="offcanvasContenido">
          {/* CATEGORÍAS */}

          <div className="grupoFiltro">
            <h4>Categoría</h4>

            <div className="categoriasFiltro">
              {categorias.map((cat) => {
                const cantidad =
                  productos.filter(
                    (producto) =>
                      cat === "Todos" ||
                      producto.categoria ===
                        cat
                  ).length;

                return (
                  <button
                    key={cat}
                    className={
                      categoria === cat
                        ? "categoriaFiltroActiva"
                        : ""
                    }
                    onClick={() =>
                      cambiarCategoria(cat)
                    }
                  >
                    <span>
                      {cat === "Todos"
                        ? "Todos los productos"
                        : cat}
                    </span>

                    <small>
                      {cantidad}
                    </small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRECIO */}

          <div className="grupoFiltro">
            <h4>Precio</h4>

            <div className="precioInputs">
              <label>
                <span>DESDE</span>

                <div>
                  <small>$</small>

                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={precioMin}
                    onChange={(e) => {
                      setPrecioMin(
                        e.target.value
                      );

                      setCantidadVisible(
                        POR_PAGINA
                      );
                    }}
                  />
                </div>
              </label>

              <span className="precioSeparador">
                —
              </span>

              <label>
                <span>HASTA</span>

                <div>
                  <small>$</small>

                  <input
                    type="number"
                    min="0"
                    placeholder="100000"
                    value={precioMax}
                    onChange={(e) => {
                      setPrecioMax(
                        e.target.value
                      );

                      setCantidadVisible(
                        POR_PAGINA
                      );
                    }}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* MOSTRAR */}

          <div className="grupoFiltro">
            <h4>Mostrar</h4>

            <label className="checkFiltro">
              <input
                type="checkbox"
                checked={soloStock}
                onChange={(e) => {
                  setSoloStock(
                    e.target.checked
                  );

                  setCantidadVisible(
                    POR_PAGINA
                  );
                }}
              />

              <span className="checkVisual" />

              <div>
                <strong>
                  Productos en stock
                </strong>

                <small>
                  Disponibles para comprar
                </small>
              </div>
            </label>

            <label className="checkFiltro">
              <input
                type="checkbox"
                checked={
                  soloDestacados
                }
                onChange={(e) => {
                  setSoloDestacados(
                    e.target.checked
                  );

                  setCantidadVisible(
                    POR_PAGINA
                  );
                }}
              />

              <span className="checkVisual" />

              <div>
                <strong>
                  Solo destacados
                </strong>

                <small>
                  Selección especial MAH
                </small>
              </div>
            </label>
          </div>
        </div>

        <div className="offcanvasFooter">
          <button
            className="offcanvasLimpiar"
            onClick={limpiarFiltros}
          >
            LIMPIAR
          </button>

          <button
            className="offcanvasAplicar"
            onClick={() =>
              setFiltrosAbiertos(false)
            }
          >
            VER{" "}
            {productosFiltrados.length}{" "}
            PRODUCTOS
          </button>
        </div>
      </aside>

      {/* =====================================
          OFFCANVAS CARRITO - DERECHA
      ====================================== */}

      <aside
        className={`carritoOffcanvas ${
          carritoAbierto
            ? "carritoOffcanvasAbierto"
            : ""
        }`}
      >
        {/* HEADER */}

        <div className="carritoHeader">
          <div>
            <span>
              TU SELECCIÓN
            </span>

            <h3>Carrito</h3>

            {cantidadCarrito > 0 && (
              <p>
                {cantidadCarrito}{" "}
                {cantidadCarrito === 1
                  ? "producto"
                  : "productos"}
              </p>
            )}
          </div>

          <button
            className="carritoCerrar"
            onClick={cerrarCarrito}
            aria-label="Cerrar carrito"
          >
            ×
          </button>
        </div>

        {/* CONTENIDO */}

        <div className="carritoContenido">
          {carrito.length === 0 ? (
            <div className="carritoVacio">
              <div className="carritoVacioIcono">
                <span>MAH</span>
              </div>

              <h4>
                Tu carrito está vacío
              </h4>

              <p>
                Agregá productos y
                aparecerán acá.
              </p>

              <button
                onClick={
                  cerrarCarrito
                }
              >
                SEGUIR COMPRANDO
              </button>
            </div>
          ) : (
            <>
              <div className="carritoProductos">
                {carrito.map(
                  (producto) => (
                    <article
                      className="carritoProducto"
                      key={producto.id}
                    >
                      {/* IMAGEN */}

                      <div className="carritoProductoImagen">
                        {producto.imagen ? (
                          <img
                            src={
                              producto.imagen
                            }
                            alt={
                              producto.nombre
                            }
                          />
                        ) : (
                          <div className="carritoSinImagen">
                            MAH
                          </div>
                        )}
                      </div>

                      {/* INFO */}

                      <div className="carritoProductoInfo">
                        <span className="carritoProductoCategoria">
                          {
                            producto.categoria
                          }
                        </span>

                        <h4>
                          {
                            producto.nombre
                          }
                        </h4>

                        <strong className="carritoProductoPrecio">
                          $
                          {formatearPrecio(
                            producto.precio
                          )}
                        </strong>

                        <div className="carritoProductoAbajo">
                          {/* CANTIDAD */}

                          <div className="carritoCantidad">
                            <button
                              onClick={() =>
                                restarUnidad(
                                  producto.id
                                )
                              }
                              aria-label="Restar unidad"
                            >
                              −
                            </button>

                            <span>
                              {
                                producto.cantidad
                              }
                            </span>

                            <button
                              onClick={() =>
                                sumarUnidad(
                                  producto.id
                                )
                              }
                              aria-label="Sumar unidad"
                            >
                              +
                            </button>
                          </div>

                          {/* SUBTOTAL */}

                          <div className="carritoProductoSubtotal">
                            <small>
                              SUBTOTAL
                            </small>

                            <strong>
                              $
                              {formatearPrecio(
                                Number(
                                  producto.precio
                                ) *
                                  producto.cantidad
                              )}
                            </strong>
                          </div>
                        </div>
                      </div>

                      {/* ELIMINAR */}

                      <button
                        className="carritoEliminar"
                        onClick={() =>
                          eliminarDelCarrito(
                            producto.id
                          )
                        }
                        aria-label={`Eliminar ${producto.nombre}`}
                      >
                        ×
                      </button>
                    </article>
                  )
                )}
              </div>

              <button
                className="vaciarCarrito"
                onClick={vaciarCarrito}
              >
                VACIAR CARRITO
              </button>
            </>
          )}
        </div>

        {/* FOOTER CARRITO */}

        {carrito.length > 0 && (
          <div className="carritoFooter">
            <div className="carritoResumenLinea">
              <span>Productos</span>

              <strong>
                {cantidadCarrito}
              </strong>
            </div>

            <div className="carritoTotal">
              <div>
                <span>TOTAL</span>

                <small>
                  Total de tu compra
                </small>
              </div>

              <strong>
                $
                {formatearPrecio(
                  totalCarrito
                )}
              </strong>
            </div>

            <button
              className="iniciarCompra"
              onClick={iniciarCompra}
            >
              <span>
                INICIAR COMPRA
              </span>

              <span>→</span>
            </button>

            <button
              className="seguirComprando"
              onClick={cerrarCarrito}
            >
              SEGUIR COMPRANDO
            </button>
          </div>
        )}
      </aside>
    </section>
  );
};

export default Productos;