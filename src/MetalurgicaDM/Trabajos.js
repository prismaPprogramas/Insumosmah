import React, { useEffect, useState } from 'react'

const trabajos = [
    {
        id: '01',
        titulo: 'Estructuras metálicas',
        categoria: 'Fabricación',
        imagen: '/MetalurgicaDM/galeria01.webp'
    },
    {
        id: '02',
        titulo: 'Fabricación industrial',
        categoria: 'Metalúrgica',
        imagen: '/MetalurgicaDM/galeria02.webp'
    },
    {
        id: '03',
        titulo: 'Trabajos de soldadura',
        categoria: 'Soldadura',
        imagen: '/MetalurgicaDM/galeria03.webp'
    },
    {
        id: '04',
        titulo: 'Montaje de estructuras',
        categoria: 'Montaje',
        imagen: '/MetalurgicaDM/galeria04.webp'
    },
    {
        id: '05',
        titulo: 'Desarrollos a medida',
        categoria: 'Fabricación',
        imagen: '/MetalurgicaDM/galeria05.webp'
    },
    {
        id: '06',
        titulo: 'Reparación y mantenimiento',
        categoria: 'Mantenimiento',
        imagen: '/MetalurgicaDM/galeria06.webp'
    },
    {
        id: '07',
        titulo: 'Reparación y mantenimiento',
        categoria: 'Mantenimiento',
        imagen: '/MetalurgicaDM/galeria07.webp'
    }
]


const Trabajos = ({ cerrarTrabajos }) => {

    const [seleccionado, setSeleccionado] = useState(null)
    const [cerrando, setCerrando] = useState(false)


    const cerrarGaleria = () => {

        setCerrando(true)

        setTimeout(() => {
            cerrarTrabajos()
        }, 650)

    }


    useEffect(() => {

        const overflowAnterior = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = overflowAnterior
        }

    }, [])


    return (
        <section
            className={`dmTrabajos ${cerrando ? 'dmTrabajos--closing' : ''
                }`}
        >

            {/* =====================================
          HEADER
      ====================================== */}

            <div className="dmTrabajos__header">

                <div className="dmTrabajos__brand">


                    <span className="dmTrabajos__brandLine"></span>

                    <span>
                        TRABAJOS
                    </span>

                </div>


                <div className="dmTrabajos__headerCenter">
                    DM / PROYECTOS REALIZADOS
                </div>


                <button
                    className="dmTrabajos__close"
                    onClick={cerrarGaleria}
                >
                    <span>CERRAR</span>

                    <i className="bi bi-x-lg"></i>
                </button>

            </div>


            {/* =====================================
          INTRO
      ====================================== */}

            <div className="dmTrabajos__intro">

                <div>

                    <span className="dmTrabajos__eyebrow">
                        NUESTRO TRABAJO
                    </span>

                    <h2>
                        Hecho en
                        <strong> metal.</strong>
                    </h2>

                </div>


                <p>
                    Una selección de trabajos desarrollados por DM
                    Metalúrgica. Fabricación, estructuras y soluciones
                    construidas para cada proyecto.
                </p>

            </div>


            {/* =====================================
          GALERÍA
      ====================================== */}

            <div className="dmTrabajos__gallery">

                {trabajos.map((trabajo, index) => (

                    <button
                        className={`dmTrabajos__project dmTrabajos__project--${index + 1}`}
                        key={trabajo.id}
                        onClick={() => setSeleccionado(trabajo)}
                    >

                        <img
                            src={`${process.env.PUBLIC_URL}${trabajo.imagen}`}
                            alt={trabajo.titulo}
                        />


                        <div className="dmTrabajos__projectShade"></div>


                        <div className="dmTrabajos__projectNumber">
                            {trabajo.id}
                        </div>


                        <div className="dmTrabajos__projectInfo">

                            <span>
                                {trabajo.categoria}
                            </span>

                            <h3>
                                {trabajo.titulo}
                            </h3>

                        </div>


                        <div className="dmTrabajos__projectArrow">
                            <i className="bi bi-arrow-up-right"></i>
                        </div>

                    </button>

                ))}

            </div>


            {/* =====================================
          FOOTER
      ====================================== */}

            <div className="dmTrabajos__footer">

                <span>
                    DM METALÚRGICA
                </span>

                <span>
                    ALLEN · RÍO NEGRO
                </span>

                <span>
                    {trabajos.length.toString().padStart(2, '0')} PROYECTOS
                </span>

            </div>


            {/* =====================================
          VISOR
      ====================================== */}

            {seleccionado && (

                <div className="dmTrabajosViewer">

                    <img
                        src={`${process.env.PUBLIC_URL}${seleccionado.imagen}`}
                        alt={seleccionado.titulo}
                    />


                    <div className="dmTrabajosViewer__shade"></div>


                    <button
                        className="dmTrabajosViewer__close"
                        onClick={() => setSeleccionado(null)}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>


                    <div className="dmTrabajosViewer__info">

                        <span>
                            {seleccionado.id} / {seleccionado.categoria}
                        </span>

                        <h3>
                            {seleccionado.titulo}
                        </h3>

                    </div>

                </div>

            )}

        </section>
    )
}

export default Trabajos