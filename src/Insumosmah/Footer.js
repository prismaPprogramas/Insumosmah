import React from "react";

const Footer = () => {
  const logo =
    "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp";

  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footerMah" id="contacto">

      {/* =====================================
          PARTE SUPERIOR
      ====================================== */}

      <div className="footerContenido">

        {/* ===================================
            MARCA
        ==================================== */}

        <div className="footerMarca">

          <div className="footerLogo">

            <img
              src={logo}
              alt="Insumos MAH"
            />

          </div>

          <div className="footerMarcaTexto">

            <span>
              INSUMOS MAH
            </span>

            <p>
              Todo lo que te gusta,
              <br />
              en un solo lugar.
            </p>

          </div>

        </div>


        {/* ===================================
            NAVEGACIÓN
        ==================================== */}

        <div className="footerColumna">

          <span className="footerTitulo">
            EXPLORAR
          </span>

          <nav>

            <a href="#productos">
              Productos
            </a>

            <a href="#catalogo">
              Catálogo
            </a>

            <a href="#conoce-mah">
              Conocé MAH
            </a>

          </nav>

        </div>


        {/* ===================================
            CATEGORÍAS
        ==================================== */}

        <div className="footerColumna">

          <span className="footerTitulo">
            CATEGORÍAS
          </span>

          <nav>

            <a href="#catalogo">
              Belleza
            </a>

            <a href="#catalogo">
              Accesorios
            </a>

            <a href="#catalogo">
              Perfumería
            </a>

            <a href="#catalogo">
              Tecnología
            </a>

            <a href="#catalogo">
              Regalería
            </a>

          </nav>

        </div>


        {/* ===================================
            CONTACTO
        ==================================== */}

        <div className="footerContacto">

          <span className="footerTitulo">
            HABLEMOS
          </span>

          <h3>
            ¿Encontraste
            <br />
            lo que buscabas?
          </h3>

          <p>
            Escribinos y te ayudamos con
            tu compra.
          </p>


          <div className="footerRedes">

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                console.log(
                  "Abrir WhatsApp"
                );
              }}
            >
              WHATSAPP
              <span>↗</span>
            </a>


            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                console.log(
                  "Abrir Instagram"
                );
              }}
            >
              INSTAGRAM
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>


      {/* =====================================
          UBICACIÓN
      ====================================== */}

      <div className="footerInfo">

        <div className="footerUbicacion">

          <span className="footerPunto" />

          <div>

            <small>
              ESTAMOS EN
            </small>

            <strong>
              Cervantes · Río Negro · Argentina
            </strong>

          </div>

        </div>


        <button
          className="footerSubir"
          onClick={subir}
        >
          VOLVER ARRIBA

          <span>
            ↑
          </span>
        </button>

      </div>


      {/* =====================================
          MAH GIGANTE
      ====================================== */}

      


      {/* =====================================
          PIE
      ====================================== */}

      <div className="footerPie">

        <p>
          © 2026 INSUMOS MAH
        </p>

        <p>
          CERVANTES · RÍO NEGRO
        </p>

        <p>
          TODOS LOS DERECHOS RESERVADOS
        </p>

      </div>

    </footer>
  );
};

export default Footer;