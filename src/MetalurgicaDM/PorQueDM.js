import React, { useState } from 'react'

const razones = [
    {
        numero: '01',
        titulo: 'Experiencia',
        subtitulo: 'SABER HACER',
        descripcion:
            'Cada trabajo se aborda desde el conocimiento del oficio, buscando soluciones concretas y bien ejecutadas para cada necesidad.',
        icono: 'bi-hammer'
    },
    {
        numero: '02',
        titulo: 'Calidad',
        subtitulo: 'EN CADA DETALLE',
        descripcion:
            'Cuidamos cada etapa del trabajo, desde la preparación y fabricación hasta las terminaciones y el resultado final.',
        icono: 'bi-shield-check'
    },
    {
        numero: '03',
        titulo: 'Cumplimiento',
        subtitulo: 'COMPROMISO',
        descripcion:
            'Trabajamos con responsabilidad, comunicación clara y atención sobre cada etapa para llevar el proyecto adelante de forma ordenada.',
        icono: 'bi-check2-circle'
    },
    {
        numero: '04',
        titulo: 'A medida',
        subtitulo: 'CADA PROYECTO ES DISTINTO',
        descripcion:
            'No trabajamos con una única solución. Analizamos cada necesidad para desarrollar una respuesta adaptada al proyecto.',
        icono: 'bi-rulers'
    }
]


const PorQueDM = () => {

    const [activo, setActivo] = useState(0)

    return (
        <section className="dmPorque" id="porque-dm">

            <div className="dmPorque__container">

                {/* HEADER */}

                <div className="dmPorque__header">

                    <div className="dmPorque__section">
                        <div></div>
                        <p>POR QUÉ DM</p>
                    </div>

                    <p className="dmPorque__code">
                        DM / FORMA DE TRABAJAR
                    </p>

                </div>


                {/* INTRO */}

                <div className="dmPorque__intro">

                    <h2>
                        No es solamente
                        <span> trabajar el metal.</span>
                    </h2>

                    <div className="dmPorque__introRight">

                        <span>
                            NUESTRA MANERA DE HACER
                        </span>

                        <p>
                            Detrás de cada proyecto hay decisiones,
                            precisión y compromiso. Trabajamos buscando
                            que cada solución responda realmente a lo
                            que el cliente necesita.
                        </p>

                    </div>

                </div>


                {/* RAZONES */}

                <div className="dmPorque__razones">

                    {razones.map((razon, index) => (

                        <div
                            key={razon.numero}
                            className={`dmPorque__razon ${
                                activo === index
                                    ? 'dmPorque__razon--active'
                                    : ''
                            }`}
                            onMouseEnter={() => setActivo(index)}
                            onClick={() => setActivo(index)}
                        >

                            <div className="dmPorque__numero">
                                {razon.numero}
                            </div>


                            <div className="dmPorque__titulo">

                                <span>
                                    {razon.subtitulo}
                                </span>

                                <h3>
                                    {razon.titulo}
                                </h3>

                            </div>


                            <div className="dmPorque__descripcion">

                                <p>
                                    {razon.descripcion}
                                </p>

                            </div>


                            <div className="dmPorque__icon">

                                <i className={`bi ${razon.icono}`}></i>

                            </div>

                        </div>

                    ))}

                </div>


                {/* FOOTER TÉCNICO */}

                <div className="dmPorque__footer">

                    <span>
                        DM METALÚRGICA
                    </span>

                    <div></div>

                    <span>
                        EXPERIENCIA
                    </span>

                    <span>
                        CALIDAD
                    </span>

                    <span>
                        CUMPLIMIENTO
                    </span>

                    <span>
                        A MEDIDA
                    </span>

                </div>

            </div>

        </section>
    )
}

export default PorQueDM