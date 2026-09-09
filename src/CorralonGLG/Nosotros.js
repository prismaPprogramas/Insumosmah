import React from 'react'

const valores = [
    {
        numero: '01',
        icono: 'bi-chat-dots',
        titulo: 'Atención personalizada',
        texto: 'Escuchamos lo que necesitás y buscamos la mejor solución para tu proyecto.'
    },
    {
        numero: '02',
        icono: 'bi-lightbulb',
        titulo: 'Asesoramiento',
        texto: 'Te acompañamos para que puedas elegir materiales y productos con más seguridad.'
    },
    {
        numero: '03',
        icono: 'bi-grid',
        titulo: 'Variedad',
        texto: 'Trabajamos con distintas soluciones para construcción, reforma y terminaciones.'
    },
    {
        numero: '04',
        icono: 'bi-hand-thumbs-up',
        titulo: 'Compromiso',
        texto: 'Buscamos responder con responsabilidad, cercanía y una atención simple.'
    }
]

const Nosotros = () => {

    return (
        <main className="glg-nosotros">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="glg-nosotros__hero">

                <div className="glg-nosotros__hero-container">

                    <div className="glg-nosotros__hero-content">

                        <span className="glg-nosotros__eyebrow">
                            CORRALÓN GLG
                        </span>

                        <h1>
                            Construimos mucho más
                            <span> que proyectos.</span>
                        </h1>

                        <p>
                            En GLG trabajamos para que construir, renovar
                            o mejorar tus espacios sea más simple.
                        </p>

                    </div>


                    <div className="glg-nosotros__hero-side">

                        <span>
                            ESTAMOS PARA HACER REALIDAD
                        </span>

                        <strong>
                            TUS SUEÑOS.
                        </strong>

                    </div>

                </div>

            </section>


            {/* =====================================
                PRESENTACION
            ===================================== */}

            <section className="glg-nosotros__presentacion">

                <div className="glg-nosotros__presentacion-container">

                    <div className="glg-nosotros__imagen">

                        <img
                            src="/img/nosotros-glg.jpg"
                            alt="Corralón GLG"
                        />

                        <div className="glg-nosotros__imagen-label">
                            <span>GLG</span>
                            <small>CONSTRUCCIONES</small>
                        </div>

                    </div>


                    <div className="glg-nosotros__texto">

                        <span className="glg-nosotros__section-label">
                            SOBRE NOSOTROS
                        </span>

                        <h2>
                            Cerca de cada obra.
                            <span> Cerca de cada idea.</span>
                        </h2>

                        <p>
                            Corralón GLG nace con una idea simple:
                            acompañar a cada cliente durante el proceso
                            de construir, renovar o transformar un espacio.
                        </p>

                        <p>
                            Buscamos ofrecer materiales, productos y
                            soluciones para distintas etapas de una obra,
                            combinando variedad con una atención cercana.
                        </p>

                        <p>
                            Porque detrás de cada compra hay un proyecto,
                            una ampliación, una casa, un arreglo o una idea
                            que alguien quiere hacer realidad.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================
                POR QUE ELEGIRNOS
            ===================================== */}

            <section className="glg-nosotros__valores">

                <div className="glg-nosotros__valores-container">

                    <div className="glg-nosotros__valores-header">

                        <span className="glg-nosotros__section-label">
                            ¿POR QUÉ GLG?
                        </span>

                        <h2>
                            Una forma más simple
                            <span> de acompañar tu proyecto.</span>
                        </h2>

                    </div>


                    <div className="glg-nosotros__valores-grid">

                        {valores.map((valor) => (

                            <article
                                className="glg-nosotros__valor"
                                key={valor.numero}
                            >

                                <div className="glg-nosotros__valor-top">

                                    <div className="glg-nosotros__valor-icon">
                                        <i className={`bi ${valor.icono}`}></i>
                                    </div>

                                    <span>
                                        {valor.numero}
                                    </span>

                                </div>

                                <h3>
                                    {valor.titulo}
                                </h3>

                                <p>
                                    {valor.texto}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                CTA
            ===================================== */}

            <section className="glg-nosotros__cta">

                <div className="glg-nosotros__cta-container">

                    <div>

                        <span>
                            ¿TENÉS UN PROYECTO EN MENTE?
                        </span>

                        <h2>
                            Nosotros te ayudamos
                            <strong> a hacerlo realidad.</strong>
                        </h2>

                    </div>


                    <a
                        href="https://wa.me/5490000000000"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp"></i>

                        Pedir presupuesto
                    </a>

                </div>

            </section>

        </main>
    )
}

export default Nosotros