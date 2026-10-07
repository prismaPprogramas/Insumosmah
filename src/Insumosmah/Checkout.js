import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCarrito } from "../CarritoContext";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    carrito,
    cantidadCarrito,
    totalCarrito,
    sumarUnidad,
    restarUnidad,
    eliminarDelCarrito,
  } = useCarrito();

  /* =========================================
     PASOS
  ========================================= */

  const [paso, setPaso] = useState(1);

  /* =========================================
     DATOS CLIENTE
  ========================================= */

  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    telefono: "",
    localidad: "",
    direccion: "",
    altura: "",
    pisoDepto: "",
    codigoPostal: "",
    referencias: "",
  });

  const [errores, setErrores] = useState({});

  /* =========================================
     PRECIO
  ========================================= */

  const formatearPrecio = (precio) => {
    return Number(precio).toLocaleString("es-AR");
  };

  /* =========================================
     CAMBIAR DATOS
  ========================================= */

  const cambiarDato = (e) => {
    const { name, value } = e.target;

    setDatosCliente((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));

    setErrores((erroresActuales) => ({
      ...erroresActuales,
      [name]: false,
    }));
  };

  /* =========================================
     VALIDAR ENTREGA
  ========================================= */

  const validarEntrega = () => {
    const nuevosErrores = {};

    if (!datosCliente.nombre.trim()) {
      nuevosErrores.nombre = true;
    }

    if (!datosCliente.telefono.trim()) {
      nuevosErrores.telefono = true;
    }

    if (!datosCliente.localidad.trim()) {
      nuevosErrores.localidad = true;
    }

    if (!datosCliente.direccion.trim()) {
      nuevosErrores.direccion = true;
    }

    if (!datosCliente.altura.trim()) {
      nuevosErrores.altura = true;
    }

    if (!datosCliente.codigoPostal.trim()) {
      nuevosErrores.codigoPostal = true;
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  /* =========================================
     SIGUIENTE PASO
  ========================================= */

  const continuarAEntrega = () => {
    setPaso(2);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const continuarAPago = () => {
    if (!validarEntrega()) {
      return;
    }

    setPaso(3);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     VOLVER PASO
  ========================================= */

  const volverPaso = () => {
    if (paso === 1) {
      navigate("/");
      return;
    }

    setPaso((pasoActual) => pasoActual - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     CONFIRMAR
  ========================================= */

  const confirmarPedido = () => {
    const pedido = {
      cliente: datosCliente,
      productos: carrito,
      cantidadProductos: cantidadCarrito,
      total: totalCarrito,
      pago: "A convenir",
    };

    console.log("PEDIDO MAH:", pedido);

    /*
      DESPUÉS ACÁ PODEMOS:

      1. Crear mensaje de WhatsApp
      2. Guardar pedido en Firebase
      3. Enviar al número de MAH
      4. Vaciar carrito
      5. Mostrar pantalla "Pedido enviado"
    */
  };

  /* =========================================
     CARRITO VACÍO
  ========================================= */

  if (carrito.length === 0) {
    return (
      <main className="checkout">
        <div className="checkoutVacio">
          <div className="checkoutVacioMarca">
            MAH
          </div>

          <span>TU COMPRA</span>

          <h1>Tu carrito está vacío.</h1>

          <p>
            Agregá algunos productos para comenzar
            tu compra.
          </p>

          <button onClick={() => navigate("/")}>
            VOLVER A LA TIENDA
            <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  /* =========================================
     RETURN
  ========================================= */

  return (
    <main className="checkout">
      <div className="checkoutContenedor">

        {/* =====================================
            HEADER
        ====================================== */}

        <header className="checkoutHeader">
          <button
            className="checkoutVolver"
            onClick={volverPaso}
          >
            ← VOLVER
          </button>

          <div className="checkoutLogo">
            MAH
          </div>

          <div className="checkoutHeaderSeguro">
            COMPRA SEGURA
          </div>
        </header>

        {/* =====================================
            PROGRESO
        ====================================== */}

        <div className="checkoutProgreso">

          <button
            className={`checkoutPaso ${
              paso === 1 ? "activo" : ""
            } ${
              paso > 1 ? "completado" : ""
            }`}
            onClick={() => setPaso(1)}
          >
            <span className="checkoutPasoCirculo">
              {paso > 1 ? "✓" : "1"}
            </span>

            <span className="checkoutPasoTexto">
              Productos
            </span>
          </button>

          <div
            className={`checkoutLinea ${
              paso > 1 ? "completada" : ""
            }`}
          />

          <button
            className={`checkoutPaso ${
              paso === 2 ? "activo" : ""
            } ${
              paso > 2 ? "completado" : ""
            }`}
            onClick={() => {
              if (paso > 2) {
                setPaso(2);
              }
            }}
          >
            <span className="checkoutPasoCirculo">
              {paso > 2 ? "✓" : "2"}
            </span>

            <span className="checkoutPasoTexto">
              Entrega
            </span>
          </button>

          <div
            className={`checkoutLinea ${
              paso > 2 ? "completada" : ""
            }`}
          />

          <button
            className={`checkoutPaso ${
              paso === 3 ? "activo" : ""
            }`}
          >
            <span className="checkoutPasoCirculo">
              3
            </span>

            <span className="checkoutPasoTexto">
              Pago
            </span>
          </button>

        </div>

        {/* =====================================
            PASO 1 - PRODUCTOS
        ====================================== */}

        {paso === 1 && (
          <section className="checkoutEtapa">

            <div className="checkoutTitulo">
              <span>PASO 01</span>

              <h1>
                Revisá tu compra.
              </h1>

              <p>
                Comprobá los productos y cantidades
                antes de continuar.
              </p>
            </div>

            <div className="checkoutLayout">

              {/* PRODUCTOS */}

              <div className="checkoutProductos">

                {carrito.map((producto) => (
                  <article
                    className="checkoutProducto"
                    key={producto.id}
                  >

                    <div className="checkoutProductoImagen">

                      {producto.imagen ? (
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                        />
                      ) : (
                        <div className="checkoutSinImagen">
                          MAH
                        </div>
                      )}

                    </div>

                    <div className="checkoutProductoInfo">

                      <span className="checkoutProductoCategoria">
                        {producto.categoria}
                      </span>

                      <h3>
                        {producto.nombre}
                      </h3>

                      <strong className="checkoutProductoPrecioUnitario">
                        $
                        {formatearPrecio(
                          producto.precio
                        )}
                      </strong>

                      <div className="checkoutProductoAcciones">

                        <div className="checkoutCantidad">

                          <button
                            onClick={() =>
                              restarUnidad(
                                producto.id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {producto.cantidad}
                          </span>

                          <button
                            onClick={() =>
                              sumarUnidad(
                                producto.id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          className="checkoutEliminar"
                          onClick={() =>
                            eliminarDelCarrito(
                              producto.id
                            )
                          }
                        >
                          ELIMINAR
                        </button>

                      </div>

                    </div>

                    <div className="checkoutProductoSubtotal">

                      <span>SUBTOTAL</span>

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

                  </article>
                ))}

              </div>

              {/* RESUMEN */}

              <aside className="checkoutResumen">

                <span className="checkoutResumenMini">
                  TU PEDIDO
                </span>

                <h2>
                  Resumen de compra
                </h2>

                <div className="checkoutResumenLinea">
                  <span>Productos</span>

                  <strong>
                    {cantidadCarrito}
                  </strong>
                </div>

                <div className="checkoutResumenLinea">
                  <span>Entrega</span>

                  <strong>
                    A coordinar
                  </strong>
                </div>

                <div className="checkoutTotal">

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
                  className="checkoutBotonPrincipal"
                  onClick={continuarAEntrega}
                >
                  <span>
                    CONTINUAR
                  </span>

                  <span>→</span>
                </button>

              </aside>

            </div>

          </section>
        )}

        {/* =====================================
            PASO 2 - ENTREGA
        ====================================== */}

        {paso === 2 && (
          <section className="checkoutEtapa">

            <div className="checkoutTitulo">
              <span>PASO 02</span>

              <h1>
                Datos de entrega.
              </h1>

              <p>
                Contanos dónde y con quién debemos
                coordinar tu pedido.
              </p>
            </div>

            <div className="checkoutLayout">

              {/* FORMULARIO */}

              <div className="checkoutFormulario">

                <div className="checkoutFormularioTitulo">
                  <span>
                    DATOS DEL CLIENTE
                  </span>

                  <h2>
                    Información de contacto
                  </h2>
                </div>

                <div className="checkoutCampos">

                  {/* NOMBRE */}

                  <label className="checkoutCampo checkoutCampoCompleto">

                    <span>
                      NOMBRE Y APELLIDO *
                    </span>

                    <input
                      type="text"
                      name="nombre"
                      placeholder="Ej: María González"
                      value={
                        datosCliente.nombre
                      }
                      onChange={cambiarDato}
                      className={
                        errores.nombre
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.nombre && (
                      <small>
                        Ingresá tu nombre.
                      </small>
                    )}

                  </label>

                  {/* TELÉFONO */}

                  <label className="checkoutCampo checkoutCampoCompleto">

                    <span>
                      TELÉFONO *
                    </span>

                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Ej: 299 1234567"
                      value={
                        datosCliente.telefono
                      }
                      onChange={cambiarDato}
                      className={
                        errores.telefono
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.telefono && (
                      <small>
                        Ingresá un teléfono.
                      </small>
                    )}

                  </label>

                  {/* LOCALIDAD */}

                  <label className="checkoutCampo checkoutCampoCompleto">

                    <span>
                      LOCALIDAD *
                    </span>

                    <input
                      type="text"
                      name="localidad"
                      placeholder="Ej: Cervantes"
                      value={
                        datosCliente.localidad
                      }
                      onChange={cambiarDato}
                      className={
                        errores.localidad
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.localidad && (
                      <small>
                        Ingresá tu localidad.
                      </small>
                    )}

                  </label>

                  {/* DIRECCIÓN */}

                  <label className="checkoutCampo checkoutCampoDireccion">

                    <span>
                      DIRECCIÓN *
                    </span>

                    <input
                      type="text"
                      name="direccion"
                      placeholder="Ej: San Martín"
                      value={
                        datosCliente.direccion
                      }
                      onChange={cambiarDato}
                      className={
                        errores.direccion
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.direccion && (
                      <small>
                        Ingresá una dirección.
                      </small>
                    )}

                  </label>

                  {/* ALTURA */}

                  <label className="checkoutCampo checkoutCampoAltura">

                    <span>
                      ALTURA *
                    </span>

                    <input
                      type="text"
                      name="altura"
                      placeholder="123"
                      value={
                        datosCliente.altura
                      }
                      onChange={cambiarDato}
                      className={
                        errores.altura
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.altura && (
                      <small>
                        Falta la altura.
                      </small>
                    )}

                  </label>

                  {/* PISO */}

                  <label className="checkoutCampo">

                    <span>
                      PISO / DEPTO
                    </span>

                    <input
                      type="text"
                      name="pisoDepto"
                      placeholder="Opcional"
                      value={
                        datosCliente.pisoDepto
                      }
                      onChange={cambiarDato}
                    />

                  </label>

                  {/* CP */}

                  <label className="checkoutCampo">

                    <span>
                      CÓDIGO POSTAL *
                    </span>

                    <input
                      type="text"
                      name="codigoPostal"
                      placeholder="Ej: 8326"
                      value={
                        datosCliente.codigoPostal
                      }
                      onChange={cambiarDato}
                      className={
                        errores.codigoPostal
                          ? "campoError"
                          : ""
                      }
                    />

                    {errores.codigoPostal && (
                      <small>
                        Ingresá el código postal.
                      </small>
                    )}

                  </label>

                  {/* REFERENCIAS */}

                  <label className="checkoutCampo checkoutCampoCompleto">

                    <span>
                      REFERENCIAS
                    </span>

                    <textarea
                      name="referencias"
                      placeholder="Entre calles, color de la casa, indicaciones, etc."
                      value={
                        datosCliente.referencias
                      }
                      onChange={cambiarDato}
                    />

                  </label>

                </div>

              </div>

              {/* RESUMEN */}

              <aside className="checkoutResumen">

                <span className="checkoutResumenMini">
                  TU PEDIDO
                </span>

                <h2>
                  Resumen
                </h2>

                <div className="checkoutResumenLinea">
                  <span>Productos</span>

                  <strong>
                    {cantidadCarrito}
                  </strong>
                </div>

                <div className="checkoutResumenLinea">
                  <span>Entrega</span>

                  <strong>
                    A coordinar
                  </strong>
                </div>

                <div className="checkoutTotal">

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
                  className="checkoutBotonPrincipal"
                  onClick={continuarAPago}
                >
                  <span>
                    CONTINUAR
                  </span>

                  <span>→</span>
                </button>

                <button
                  className="checkoutBotonSecundario"
                  onClick={() =>
                    setPaso(1)
                  }
                >
                  ← VOLVER A PRODUCTOS
                </button>

              </aside>

            </div>

          </section>
        )}

        {/* =====================================
            PASO 3 - PAGO
        ====================================== */}

        {paso === 3 && (
          <section className="checkoutEtapa">

            <div className="checkoutTitulo">
              <span>PASO 03</span>

              <h1>
                Último paso.
              </h1>

              <p>
                Revisá la información antes de
                confirmar tu pedido.
              </p>
            </div>

            <div className="checkoutLayout">

              {/* PAGO */}

              <div className="checkoutPago">

                <div className="checkoutFormularioTitulo">
                  <span>
                    FORMA DE PAGO
                  </span>

                  <h2>
                    Pago a convenir
                  </h2>
                </div>

                <div className="checkoutPagoOpcion">

                  <div className="checkoutPagoRadio">
                    <span />
                  </div>

                  <div>
                    <strong>
                      Coordinar pago
                    </strong>

                    <p>
                      Una vez confirmado el pedido,
                      MAH coordinará con vos la forma
                      de pago.
                    </p>
                  </div>

                </div>

                {/* DATOS ENTREGA */}

                <div className="checkoutDatosConfirmacion">

                  <div className="checkoutDatosTitulo">

                    <span>
                      DATOS DE ENTREGA
                    </span>

                    <button
                      onClick={() =>
                        setPaso(2)
                      }
                    >
                      EDITAR
                    </button>

                  </div>

                  <div className="checkoutDato">

                    <span>
                      Cliente
                    </span>

                    <strong>
                      {datosCliente.nombre}
                    </strong>

                  </div>

                  <div className="checkoutDato">

                    <span>
                      Teléfono
                    </span>

                    <strong>
                      {datosCliente.telefono}
                    </strong>

                  </div>

                  <div className="checkoutDato">

                    <span>
                      Entrega
                    </span>

                    <strong>
                      {datosCliente.direccion}{" "}
                      {datosCliente.altura}
                      {datosCliente.pisoDepto
                        ? ` - ${datosCliente.pisoDepto}`
                        : ""}
                    </strong>

                  </div>

                  <div className="checkoutDato">

                    <span>
                      Localidad
                    </span>

                    <strong>
                      {datosCliente.localidad}
                    </strong>

                  </div>

                </div>

              </div>

              {/* RESUMEN FINAL */}

              <aside className="checkoutResumen">

                <span className="checkoutResumenMini">
                  TU PEDIDO
                </span>

                <h2>
                  Resumen final
                </h2>

                <div className="checkoutResumenLinea">
                  <span>Productos</span>

                  <strong>
                    {cantidadCarrito}
                  </strong>
                </div>

                <div className="checkoutResumenLinea">
                  <span>Entrega</span>

                  <strong>
                    A coordinar
                  </strong>
                </div>

                <div className="checkoutResumenLinea">
                  <span>Pago</span>

                  <strong>
                    A convenir
                  </strong>
                </div>

                <div className="checkoutTotal">

                  <div>
                    <span>TOTAL</span>

                    <small>
                      Total del pedido
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
                  className="checkoutBotonPrincipal checkoutConfirmar"
                  onClick={confirmarPedido}
                >
                  <span>
                    CONFIRMAR PEDIDO
                  </span>

                  <span>→</span>
                </button>

                <button
                  className="checkoutBotonSecundario"
                  onClick={() =>
                    setPaso(2)
                  }
                >
                  ← VOLVER A ENTREGA
                </button>

              </aside>

            </div>

          </section>
        )}

      </div>
    </main>
  );
};

export default Checkout;