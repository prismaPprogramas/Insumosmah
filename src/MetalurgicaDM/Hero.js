import React from 'react'

const Hero = () => {
    return (
        <section className="dmHero" id="inicio">

            {/* FONDO */}
            <div
                className="dmHero__image"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/MetalurgicaDM/hero.png)`
                }}
            ></div>
            <div className="dmHero__shade"></div>


            {/* DETALLES TÉCNICOS */}

            <div className="dmHero__corner">
                <span></span>
                <span></span>
            </div>


            {/* CONTENIDO PRINCIPAL */}
            <div className="dmHero__container">

                <div className="dmHero__content">

                    <div className="dmHero__tag">
                        <span className="dmHero__tagLine"></span>

                        FABRICACIÓN · ESTRUCTURAS · MONTAJE
                    </div>


                    <h1 className="dmHero__title">
                        Soluciones en metal
                        <span>hechas para durar.</span>
                    </h1>


                    <div className="dmHero__info">

                        <p>
                            Diseñamos, fabricamos y desarrollamos soluciones
                            metalúrgicas adaptadas a cada proyecto.
                        </p>


                        <div className="dmHero__actions">

                            <a href="#trabajos" className="dmHero__primary">
                                Ver trabajos

                                <i className="bi bi-arrow-up-right"></i>
                            </a>


                            <a
                                href="https://wa.me/5492995778885"
                                target="_blank"
                                rel="noreferrer"
                                className="dmHero__whatsapp"
                            >
                                <i className="bi bi-whatsapp"></i>

                                Consultar
                            </a>

                        </div>

                    </div>

                </div>


                {/* PLACA INDUSTRIAL */}

                <div className="dmHero__plate">

                    <div className="dmHero__plateTop">
                        <span>DM</span>
                    </div>

                    <div className="dmHero__plateLine"></div>

                    <div className="dmHero__plateContent">

                        <small>ÁREA DE TRABAJO</small>

                        <strong>
                            METAL
                            <br />
                            EN ACCIÓN
                        </strong>

                    </div>

                    <div className="dmHero__plateBottom">

                        <span>
                                CIPOLLETTI
                        </span>

                        <span>
                            RN / ARG
                        </span>

                    </div>

                </div>

            </div>


            {/* BARRA INFERIOR */}

            <div className="dmHero__bottom">

                <div className="dmHero__bottomLine"></div>

                <div className="dmHero__bottomItems">

                    <span>ESTRUCTURAS</span>

                    <span className="dmHero__dot"></span>

                    <span>FABRICACIÓN</span>

                    <span className="dmHero__dot"></span>

                    <span>SOLDADURA</span>

                    <span className="dmHero__dot"></span>

                    <span>MONTAJE</span>

                </div>

                <a href="#empresa" className="dmHero__scroll">
                    SCROLL

                    <i className="bi bi-arrow-down"></i>
                </a>

            </div>

        </section>
    )
}

export default Hero