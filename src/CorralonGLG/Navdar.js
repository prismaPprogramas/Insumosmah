import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navdar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false)

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    return (
        <header className="glg-navbar">

            <div className="glg-navbar__inner">

                {/* LOGO */}
                <Link
                    to="/"
                    className="glg-navbar__logo"
                    onClick={cerrarMenu}
                >
                    <img
                        src="https://res.cloudinary.com/heql2txb/image/upload/v1788799405/logo-glg.png"
                        alt="Corralón GLG"
                    />

                    <div className="glg-navbar__brand">
                        <span className="glg-navbar__brand-main">
                            CORRALÓN GLG
                        </span>

                        <span className="glg-navbar__brand-sub">
                            Construcciones
                        </span>
                    </div>
                </Link>


                {/* LINKS DESKTOP */}
                <nav className="glg-navbar__links">

                    <a href="#inicio">
                        Inicio
                    </a>

                    <a href="#productos">
                        Productos
                    </a>

                    <a href="/nosotros">
                        Nosotros
                    </a>

                    <a href="#contacto">
                        Contacto
                    </a>


                </nav>


                {/* WHATSAPP */}
                <a
                    className="glg-navbar__whatsapp"
                    href="https://wa.me/5490000000000"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-whatsapp"></i>

                    <span>
                        Consultanos
                    </span>
                </a>


                {/* MENU MOBILE */}
                <button
                    className={`glg-navbar__menu ${menuAbierto ? 'activo' : ''}`}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>


            {/* MOBILE NAV */}
            <div
                className={`glg-navbar__mobile ${menuAbierto ? 'glg-navbar__mobile--activo' : ''
                    }`}
            >

                <a href="#inicio" onClick={cerrarMenu}>
                    Inicio
                </a>

                <a href="#productos" onClick={cerrarMenu}>
                    Productos
                </a>

                <a href="#nosotros" onClick={cerrarMenu}>
                    Nosotros
                </a>

                <a href="#contacto" onClick={cerrarMenu}>
                    Contacto
                </a>

                <a
                    className="glg-navbar__mobile-whatsapp"
                    href="https://wa.me/5490000000000"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-whatsapp"></i>
                    Consultar por WhatsApp
                </a>

            </div>

        </header>
    )
}

export default Navdar