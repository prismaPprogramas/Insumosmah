import React from 'react'

const Footer = ({ abrirTrabajos }) => {

    const irASeccion = (id) => {

        const elemento = document.getElementById(id)

        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }


    return (
        <footer className="dmFooter">

            <div className="dmFooter__container">

                {/* =====================================
                    PARTE SUPERIOR
                ====================================== */}

                <div className="dmFooter__top">

                    {/* MARCA */}

                    <div className="dmFooter__brand">

                        <img
                            src={`${process.env.PUBLIC_URL}/MetalurgicaDM/logo.png`}
                            alt="DM Metalúrgica"
                        />

                        <p>
                            Soluciones metalúrgicas pensadas,
                            fabricadas y desarrolladas para cada proyecto.
                        </p>

                    </div>


                    {/* NAVEGACIÓN */}

                    <div className="dmFooter__column">

                        <span className="dmFooter__label">
                            NAVEGACIÓN
                        </span>

                        <button onClick={() => irASeccion('inicio')}>
                            Inicio
                        </button>

                        <button onClick={() => irASeccion('servicios')}>
                            Servicios
                        </button>

                        <button onClick={abrirTrabajos}>
                            Trabajos
                        </button>

                        <button onClick={() => irASeccion('porque-dm')}>
                            Por qué DM
                        </button>

                        <button onClick={() => irASeccion('contacto')}>
                            Contacto
                        </button>

                    </div>


                    {/* CONTACTO */}

                    <div className="dmFooter__column">

                        <span className="dmFooter__label">
                            CONTACTO
                        </span>

                        <a href="tel:+549XXXXXXXXXX">
                            +54 9 XXX XXX XXXX
                        </a>

                        <a
                            href="https://wa.me/549XXXXXXXXXX"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>

                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>

                    </div>


                    {/* UBICACIÓN */}

                    <div className="dmFooter__column">

                        <span className="dmFooter__label">
                            UBICACIÓN
                        </span>

                        <p>
                            Allen
                        </p>

                        <p>
                            Río Negro
                        </p>

                        <p>
                            Argentina
                        </p>

                    </div>

                </div>


                {/* =====================================
                    LÍNEA
                ====================================== */}

                <div className="dmFooter__line">

                    <span>DM</span>

                    <div></div>

                    <span>METALÚRGICA</span>

                </div>


                {/* =====================================
                    BOTTOM
                ====================================== */}

                <div className="dmFooter__bottom">

                    <p>
                        © {new Date().getFullYear()} DM METALÚRGICA
                    </p>

                    <p>
                        ALLEN · RÍO NEGRO · ARGENTINA
                    </p>

                    <a
                        href="#inicio"
                        className="dmFooter__backTop"
                    >
                        VOLVER ARRIBA

                        <i className="bi bi-arrow-up"></i>
                    </a>

                </div>

            </div>

        </footer>
    )
}

export default Footer