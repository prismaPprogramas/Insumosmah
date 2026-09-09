import React from 'react'

const Contacto = () => {

  const numeroWhatsApp = '549XXXXXXXXXX'

  const mensaje = encodeURIComponent(
    'Hola, quería consultar por un trabajo metalúrgico.'
  )

  const linkWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${mensaje}`

  return (
    <section className="dmContacto" id="contacto">

      <div className="dmContacto__container">

        {/* HEADER */}

        <div className="dmContacto__header">

          <div className="dmContacto__section">
            <div></div>
            <p>CONTACTO</p>
          </div>

          <p className="dmContacto__code">
            DM / HABLEMOS DE TU PROYECTO
          </p>

        </div>


        {/* MAIN */}

        <div className="dmContacto__main">

          <div className="dmContacto__title">

            <span className="dmContacto__eyebrow">
              ¿TENÉS ALGO EN MENTE?
            </span>

            <h2>
              Hablemos de
              <span> tu proyecto.</span>
            </h2>

          </div>


          <div className="dmContacto__description">

            <p>
              Contanos qué necesitás y vemos juntos la mejor
              manera de llevarlo adelante.
            </p>

            <span>
              Fabricación · estructuras · soldadura · montaje
            </span>

          </div>

        </div>


        {/* WHATSAPP */}

        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noreferrer"
          className="dmContacto__whatsapp"
        >

          <div className="dmContacto__whatsappLeft">

            <span>
              CONTACTO DIRECTO
            </span>

            <h3>
              Hablar por WhatsApp
            </h3>

          </div>


          <div className="dmContacto__whatsappIcon">

            <i className="bi bi-whatsapp"></i>

            <i className="bi bi-arrow-up-right"></i>

          </div>

        </a>


        {/* DATOS */}

        <div className="dmContacto__info">

          <div className="dmContacto__infoItem">

            <span>UBICACIÓN</span>

            <p>
              Allen · Río Negro
            </p>

          </div>


          <div className="dmContacto__infoItem">

            <span>TELÉFONO</span>

            <a href="tel:+5492995778885">
              +54 9 2995-77-8885
            </a>

          </div>


          <div className="dmContacto__infoItem">

            <span>INSTAGRAM</span>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              @dmmetalurgica
            </a>

          </div>


          <div className="dmContacto__infoItem">

            <span>CONSULTAS</span>

            <p>
              Proyectos y presupuestos
            </p>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="dmContacto__bottom">

          <span>
            DM METALÚRGICA
          </span>

          <div></div>

          <span>
            ALLEN / RN / ARG
          </span>

        </div>

      </div>

    </section>
  )
}

export default Contacto