import React, { useRef } from "react";

const productos = [
  {
    id: 1,
    nombre: "Aros Las Oreiro",
    categoria: "Accesorios",
    precio: 14500,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
  {
    id: 2,
    nombre: "Pulsera Las Oreiro",
    categoria: "Accesorios",
    precio: 20000,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
  {
    id: 3,
    nombre: "Aros Las Oreiro Premium",
    categoria: "Accesorios",
    precio: 16000,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
  {
    id: 4,
    nombre: "Pulsera Las Oreiro Premium",
    categoria: "Accesorios",
    precio: 23000,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
  {
    id: 5,
    nombre: "Accesorio MAH",
    categoria: "Novedades",
    precio: 18500,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
  {
    id: 6,
    nombre: "Colección MAH",
    categoria: "Novedades",
    precio: 21500,
    imagen:
      "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp",
  },
];

const Destacados = () => {
  const sliderRef = useRef(null);

  const moverSlider = (direccion) => {
    if (!sliderRef.current) return;

    const cantidad = sliderRef.current.clientWidth * 0.75;

    sliderRef.current.scrollBy({
      left: direccion === "izquierda" ? -cantidad : cantidad,
      behavior: "smooth",
    });
  };

  return (
    <section className="destacados" id="productos">

      {/* CABECERA */}
      <div className="destacadosHeader">

        <div>
          <span className="destacadosMini">
            DESCUBRÍ MAH
          </span>

          <h2>Los más buscados</h2>
        </div>

        <div className="destacadosHeaderRight">

          <a href="#catalogo" className="verTodos">
            VER TODOS
            <span>→</span>
          </a>

          <div className="sliderButtons">

            <button
              onClick={() => moverSlider("izquierda")}
              aria-label="Anterior"
            >
              ←
            </button>

            <button
              onClick={() => moverSlider("derecha")}
              aria-label="Siguiente"
            >
              →
            </button>

          </div>

        </div>

      </div>


      {/* SLIDER */}
      <div
        className="productosSlider"
        ref={sliderRef}
      >

        {productos.map((producto) => (

          <article
            className="productoCard"
            key={producto.id}
          >

            <div className="productoImagen">

              <span className="productoTag">
                DESTACADO
              </span>

              <button
                className="productoFavorito"
                aria-label="Agregar a favoritos"
              >
                ♡
              </button>

              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

            </div>


            <div className="productoInfo">

              <span className="productoCategoria">
                {producto.categoria}
              </span>

              <h3>
                {producto.nombre}
              </h3>

              <div className="productoCompra">

                <strong>
                  ${producto.precio.toLocaleString("es-AR")}
                </strong>

                <button
                  className="productoAgregar"
                  onClick={() =>
                    console.log("Producto:", producto)
                  }
                >
                  +
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* MOBILE INDICADOR */}
      <div className="deslizaIndicador">
        DESLIZÁ PARA VER MÁS
        <span>→</span>
      </div>

    </section>
  );
};

export default Destacados;