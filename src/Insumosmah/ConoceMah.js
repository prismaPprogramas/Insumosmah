import React from "react";

const ConoceMah = () => {
  const logo =
    "https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp";

  return (
    <section className="conoceMah" id="conoce-mah">

      {/* =====================================
          FONDO DECORATIVO
      ====================================== */}

      <div className="conoceMahPalabraFondo">
        MAH
      </div>

      <div className="conoceMahGlow conoceMahGlowUno" />
      <div className="conoceMahGlow conoceMahGlowDos" />


      {/* =====================================
          CONTENIDO
      ====================================== */}

      <div className="conoceMahContenido">

        {/* ===================================
            COLUMNA IZQUIERDA
        ==================================== */}

        <div className="conoceMahPrincipal">

          <span className="conoceMahMini">
            CONOCÉ MAH
          </span>

          <h2>
            Un poco de
            <span> todo.</span>
            <br />
            Mucho de vos.
          </h2>

          <p className="conoceMahDescripcion">
            En MAH encontrás belleza, accesorios,
            cuidado personal, tecnología, regalería
            y mucho más en un mismo lugar.
          </p>

          <p className="conoceMahTexto">
            Estamos en Cervantes, Río Negro, con una
            propuesta pensada para que siempre tengas
            algo nuevo por descubrir.
          </p>


          {/* BOTONES */}

          <div className="conoceMahBotones">

            <a
              href="#productos"
              className="conoceMahBoton conoceMahBotonPrincipal"
            >
              VER PRODUCTOS

              <span>→</span>
            </a>

            <a
              href="#contacto"
              className="conoceMahBoton conoceMahBotonSecundario"
            >
              CONTACTANOS
            </a>

          </div>

        </div>


        {/* ===================================
            COLUMNA DERECHA
        ==================================== */}

        <div className="conoceMahLateral">

          {/* LOGO */}

          <div className="conoceMahLogoContenedor">

            <span className="logoEtiqueta">
              DESDE CERVANTES
            </span>

            <div className="conoceMahLogo">

              <img
                src={logo}
                alt="Insumos MAH"
              />

            </div>

          </div>


          {/* DATOS */}

          <div className="conoceMahDatos">

            <div className="conoceMahDato">

              <span className="datoNumero">
                01
              </span>

              <div>
                <small>
                  ESTAMOS EN
                </small>

                <strong>
                  Cervantes
                </strong>

                <p>
                  Río Negro · Argentina
                </p>
              </div>

            </div>


            <div className="conoceMahDato">

              <span className="datoNumero">
                02
              </span>

              <div>
                <small>
                  ENCONTRÁ
                </small>

                <strong>
                  Todo en un lugar
                </strong>

                <p>
                  Belleza · Accesorios · Hogar
                </p>
              </div>

            </div>


            <div className="conoceMahDato">

              <span className="datoNumero">
                03
              </span>

              <div>
                <small>
                  COMPRÁ
                </small>

                <strong>
                  Fácil y rápido
                </strong>

                <p>
                  Elegí tus favoritos y hacé tu pedido
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          CINTA INFERIOR
      ====================================== */}

      <div className="conoceMahCinta">

        <div className="conoceMahCintaContenido">

          <span>MAH</span>

          <small>•</small>

          <p>BELLEZA</p>

          <small>•</small>

          <p>ACCESORIOS</p>

          <small>•</small>

          <p>PERFUMERÍA</p>

          <small>•</small>

          <p>TECNOLOGÍA</p>

          <small>•</small>

          <p>REGALERÍA</p>

          <small>•</small>

          <p>CUIDADO PERSONAL</p>

        </div>

      </div>

    </section>
  );
};

export default ConoceMah;