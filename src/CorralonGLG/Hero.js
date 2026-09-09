import React from 'react'

const Hero = () => {

    const irAProductos = () => {
        const seccion = document.getElementById('productos')

        if (seccion) {
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }


    return (
        <section className="glg-hero" id="inicio">

            {/* DECORACIÓN */}
            <div className="glg-hero__decor glg-hero__decor--green"></div>
            <div className="glg-hero__decor glg-hero__decor--orange"></div>
            <div className="glg-hero__decor glg-hero__decor--blue"></div>
            <div className="glg-hero__decor glg-hero__decor--purple"></div>


            <div className="glg-hero__container">

                {/* ==============================
                    CONTENIDO
                ============================== */}

                <div className="glg-hero__content">

                    <div className="glg-hero__eyebrow">
                        <span></span>

                        CORRALÓN GLG · CONSTRUCCIONES
                    </div>


                    <h1 className="glg-hero__title">

                        Estamos para hacer

                        <span className="glg-hero__title-highlight">
                            realidad tus sueños
                        </span>

                        <span className="glg-hero__title-last">
                            y más sencilla tu vida.
                        </span>

                    </h1>


                    <p className="glg-hero__description">
                        Todo lo que necesitás para construir,
                        renovar y transformar tus espacios.
                    </p>


                    <div className="glg-hero__actions">

                        <button
                            className="glg-hero__button glg-hero__button--primary"
                            onClick={irAProductos}
                        >
                            Ver productos

                            <i className="bi bi-arrow-down-right"></i>
                        </button>


                        <a
                            href="https://wa.me/5490000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="glg-hero__button glg-hero__button--secondary"
                        >
                            <i className="bi bi-whatsapp"></i>

                            Consultanos
                        </a>

                    </div>

                </div>


                {/* ==============================
                    VISUAL
                ============================== */}

                <div className="glg-hero__visual">

                    <div className="glg-hero__visual-number">
                        <span>GLG</span>
                        <small>CONSTRUCCIONES</small>
                    </div>


                    <div className="glg-hero__house">

                        <div className="glg-hero__house-image">
                            <img
                                src="https://res.cloudinary.com/heql2txb/image/upload/v1788799804/67c36891ba29247c41116df93071ee37.jpg"
                                alt="Construcción y materiales Corralón GLG"
                            />
                        </div>


                        <div className="glg-hero__badge">

                            <div className="glg-hero__badge-icon">
                                <i className="bi bi-house-check"></i>
                            </div>

                            <div>
                                <strong>
                                    Tu proyecto
                                </strong>

                                <span>
                                    empieza acá.
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* COLORES DEL LOGO */}

                    <div className="glg-hero__categories">

                        <div className="glg-hero__category glg-hero__category--green">
                            <i className="bi bi-bricks"></i>
                        </div>

                        <div className="glg-hero__category glg-hero__category--orange">
                            <i className="bi bi-hammer"></i>
                        </div>

                        <div className="glg-hero__category glg-hero__category--blue">
                            <i className="bi bi-grid"></i>
                        </div>

                        <div className="glg-hero__category glg-hero__category--purple">
                            <i className="bi bi-brush"></i>
                        </div>

                    </div>

                </div>

            </div>


            {/* ABAJO */}

            <div className="glg-hero__bottom">

                <span>
                    MATERIALES
                </span>

                <i></i>

                <span>
                    CONSTRUCCIÓN
                </span>

                <i></i>

                <span>
                    HOGAR
                </span>

                <i></i>

                <span>
                    SOLUCIONES
                </span>

            </div>

        </section>
    )
}

export default Hero