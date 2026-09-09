import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="glg-footer" id="contacto">

            <div className="glg-footer__container">

                {/* =====================================
                    CTA
                ===================================== */}

                <div className="glg-footer__cta">

                    <div className="glg-footer__cta-content">

                        <span className="glg-footer__eyebrow">
                            HABLEMOS DE TU PROYECTO
                        </span>

                        <h2>
                            ¿Tenés una obra
                            <span> en mente?</span>
                        </h2>

                        <p>
                            Contanos qué necesitás y te ayudamos
                            a encontrar los materiales y soluciones
                            para hacerlo realidad.
                        </p>

                    </div>


                    <a
                        href="https://wa.me/5490000000000"
                        target="_blank"
                        rel="noreferrer"
                        className="glg-footer__whatsapp"
                    >
                        <div className="glg-footer__whatsapp-icon">
                            <i className="bi bi-whatsapp"></i>
                        </div>

                        <div>
                            <small>
                                ESCRIBINOS POR WHATSAPP
                            </small>

                            <strong>
                                Pedir presupuesto
                            </strong>
                        </div>

                        <i className="bi bi-arrow-up-right glg-footer__whatsapp-arrow"></i>
                    </a>

                </div>


                {/* =====================================
                    DIVISOR DE COLORES
                ===================================== */}

                <div className="glg-footer__colors">
                    <span className="verde"></span>
                    <span className="naranja"></span>
                    <span className="celeste"></span>
                    <span className="violeta"></span>
                </div>


                {/* =====================================
                    FOOTER PRINCIPAL
                ===================================== */}

                <div className="glg-footer__main">

                    {/* MARCA */}

                    <div className="glg-footer__brand">

                        <img
                            src="/img/logo-glg.png"
                            alt="Corralón GLG"
                        />

                        <div>
                            <strong>
                                CORRALÓN GLG
                            </strong>

                            <span>
                                CONSTRUCCIONES
                            </span>
                        </div>

                    </div>


                    {/* NAVEGACION */}

                    <div className="glg-footer__column">

                        <span className="glg-footer__column-title">
                            NAVEGACIÓN
                        </span>

                        <Link to="/">
                            Inicio
                        </Link>

                        <Link to="/nosotros">
                            Nosotros
                        </Link>

                        <Link to="/#productos">
                            Productos
                        </Link>

                    </div>


                    {/* CONTACTO */}

                    <div className="glg-footer__column">

                        <span className="glg-footer__column-title">
                            CONTACTO
                        </span>

                        <a
                            href="https://wa.me/5490000000000"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-whatsapp"></i>
                            WhatsApp
                        </a>

                        <a
                            href="https://www.instagram.com/corralonglg/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                            Instagram
                        </a>

                    </div>


                    {/* UBICACION */}

                    <div className="glg-footer__column">

                        <span className="glg-footer__column-title">
                            ENCONTRANOS
                        </span>

                        <p>
                            <i className="bi bi-geo-alt"></i>

                            Agregar dirección
                        </p>

                        <p>
                            <i className="bi bi-clock"></i>

                            Agregar horarios
                        </p>

                    </div>

                </div>


                {/* =====================================
                    BOTTOM
                ===================================== */}

                <div className="glg-footer__bottom">

                    <span>
                        © {new Date().getFullYear()} Corralón GLG
                    </span>

                    <span className="glg-footer__slogan">
                        Estamos para hacer realidad tus sueños
                        y más sencilla tu vida.
                    </span>

                    <span>
                        GLG · CONSTRUCCIONES
                    </span>

                </div>

            </div>

        </footer>
    )
}

export default Footer