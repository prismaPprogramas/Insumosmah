import React from "react";

const Hero = () => {
  return (
    <section className="mahHero">

      {/* NAVBAR */}
      <nav className="mahNavbar">

        <div className="mahLogoBox">
          <img
            src="https://res.cloudinary.com/df6hryxoa/image/upload/v1791396686/logo-947872279-1750583672-a48a59d4e6cd8b5df323ba170d97327a1750583672-640-0_iy7ezh.webp"
            alt="MAH Insumos"
            className="mahLogo"
          />
        </div>

        <div className="mahNavLinks">
          <a href="#productos">Productos</a>
          <a href="#categorias">Categorías</a>
          <a href="#novedades">Novedades</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="mahNavActions">
          <button className="mahIconBtn" aria-label="Buscar">
            ⌕
          </button>

          <button className="mahCartBtn">
            Carrito
            <span>0</span>
          </button>
        </div>

      </nav>


      {/* HERO */}
      <div className="mahHeroContent">

        <div className="mahHeroText">

          <span className="mahEyebrow">
            BELLEZA · ACCESORIOS · TENDENCIAS
          </span>

          <h1>
            Todo lo que
            <span> te gusta.</span>
            <br />
            En un solo lugar.
          </h1>

          <p>
            Descubrí nuestra selección de belleza, accesorios,
            perfumería, tecnología y mucho más.
          </p>

          <div className="mahHeroButtons">

            <a href="#productos" className="mahPrimaryButton">
              VER PRODUCTOS
              <span>→</span>
            </a>

            <a href="#categorias" className="mahSecondaryButton">
              EXPLORAR CATEGORÍAS
            </a>

          </div>

        </div>


        {/* BLOQUE VISUAL */}
        <div className="mahHeroVisual">

          <div className="mahCircle mahCircleOne"></div>
          <div className="mahCircle mahCircleTwo"></div>

          <div className="mahHeroCard">

            <span className="mahCardMini">
              MAH
            </span>

            <h2>
              Encontrá
              <br />
              tu favorito.
            </h2>

            <p>
              Productos seleccionados para vos.
            </p>

            <div className="mahCardArrow">
              ↗
            </div>

          </div>

        </div>

      </div>


      {/* BARRA INFERIOR */}
      <div className="mahHeroBottom">

        <span>✦ NOVEDADES</span>
        <span>✦ BELLEZA</span>
        <span>✦ PERFUMERÍA</span>
        <span>✦ ACCESORIOS</span>
        <span>✦ REGALERÍA</span>

      </div>

    </section>
  );
};

export default Hero;