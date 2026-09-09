import React from 'react'

const beneficios = [
    {
        numero: '01',
        icono: 'bi-chat-dots',
        titulo: 'Asesoramiento',
        texto: 'Te ayudamos a encontrar la mejor opción para tu proyecto.',
        color: 'verde'
    },
    {
        numero: '02',
        icono: 'bi-grid',
        titulo: 'Variedad',
        texto: 'Distintas soluciones para cada etapa de tu obra.',
        color: 'naranja'
    },
    {
        numero: '03',
        icono: 'bi-house-check',
        titulo: 'Soluciones',
        texto: 'Desde la construcción hasta los últimos detalles.',
        color: 'celeste'
    },
    {
        numero: '04',
        icono: 'bi-people',
        titulo: 'Atención cercana',
        texto: 'Estamos para escucharte y acompañarte en lo que necesites.',
        color: 'violeta'
    }
]


const Confianza = () => {

    return (
        <section className="glg-confianza">

            <div className="glg-confianza__container">

                {/* CABECERA */}

                <div className="glg-confianza__header">

                    <span className="glg-confianza__eyebrow">
                        ¿POR QUÉ GLG?
                    </span>

                    <h2>
                        Hacerlo realidad
                        <span> puede ser más simple.</span>
                    </h2>

                </div>


                {/* BENEFICIOS */}

                <div className="glg-confianza__beneficios">

                    {beneficios.map((beneficio) => (

                        <article
                            className="glg-confianza__item"
                            key={beneficio.numero}
                        >

                            <div
                                className={`
                                    glg-confianza__icon
                                    glg-confianza__icon--${beneficio.color}
                                `}
                            >
                                <i className={`bi ${beneficio.icono}`}></i>
                            </div>


                            <span className="glg-confianza__numero">
                                {beneficio.numero}
                            </span>


                            <h3>
                                {beneficio.titulo}
                            </h3>


                            <p>
                                {beneficio.texto}
                            </p>

                        </article>

                    ))}

                </div>


                {/* FIRMA */}

                <div className="glg-confianza__footer">

                    <span>
                        CORRALÓN GLG
                    </span>

                    <div className="glg-confianza__line">

                        <i className="verde"></i>
                        <i className="naranja"></i>
                        <i className="celeste"></i>
                        <i className="violeta"></i>

                    </div>

                    <span>
                        CONSTRUCCIONES
                    </span>

                </div>

            </div>

        </section>
    )
}

export default Confianza