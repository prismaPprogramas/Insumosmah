import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="dm-navbar">

      <div className="dm-navbar__inner">

        <Link to="/" className="dm-navbar__brand">
          <img
            src={`${process.env.PUBLIC_URL}/MetalurgicaDM/logo.png`}
            alt="DM Metalúrgica"
            className="dm-navbar__logo"
          />
        </Link>


        <nav className="dm-navbar__links">

          <a href="#inicio">
            Inicio
          </a>

          <a href="#empresa">
            Empresa
          </a>

          <a href="#servicios">
            Servicios
          </a>

          <a href="#trabajos">
            Trabajos
          </a>

        </nav>


        <a
          href="https://wa.me/5492995778885"
          target="_blank"
          rel="noreferrer"
          className="dm-navbar__contacto"
        >
          <i className="bi bi-whatsapp"></i>

          <span>
            Contactanos
          </span>
        </a>

      </div>

    </header>
  )
}

export default Navbar