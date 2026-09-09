import React, { useState } from 'react'

const servicios = [
    {
        numero: '01',
        titulo: 'Estructuras metálicas',
        descripcion:
            'Diseño, fabricación y armado de estructuras metálicas adaptadas a cada proyecto, buscando resistencia, precisión y durabilidad.',
        icono: 'bi-building'
    },
    {
        numero: '02',
        titulo: 'Soldadura',
        descripcion:
            'Trabajos de soldadura para fabricación, reparación y refuerzo de piezas, estructuras y componentes metálicos.',
        icono: 'bi-lightning-charge'
    },
    {
        numero: '03',
        titulo: 'Fabricación a medida',
        descripcion:
            'Desarrollo de soluciones especiales en metal según planos, medidas, necesidades técnicas o requerimientos específicos.',
        icono: 'bi-rulers'
    },
    {
        numero: '04',
        titulo: 'Montaje',
        descripcion:
            'Armado e instalación de estructuras y componentes metálicos, acompañando cada etapa hasta la puesta en servicio.',
        icono: 'bi-tools'
    },
    {
        numero: '05',
        titulo: 'Mantenimiento',
        descripcion:
            'Reparación, refuerzo y mantenimiento de estructuras, piezas e instalaciones metálicas para extender su vida útil.',
        icono: 'bi-gear'
    }
]

const Servicios = ({ abrirTrabajos }) => {

    const [activo, setActivo] = useState(0)

    return (
        <section className="dmServicios" id="servicios">
            <div className="dmServicios__container">
                <div className="dmServicios__header">
                    <div className="dmServicios__section">
                        <div></div>
                        <p>SERVICIOS</p>
                    </div>
                    <p className="dmServicios__headerText">
                        SOLUCIONES METALÚRGICAS
                    </p>
                </div>

                <div className="dmServicios__intro">
                    <h2>
                        Lo que hacemos,
                        <span> lo hacemos en metal.</span>
                    </h2>
                    <p>
                        Trabajamos sobre proyectos de distintas escalas,
                        desarrollando soluciones adaptadas a cada necesidad.
                    </p>
                </div>

                <div className="dmServicios__content">

  <div className="dmServicios__list">
    {servicios.map((servicio, index) => (
      <button
        key={servicio.numero}
        className={`dmServicios__item ${
          activo === index ? 'dmServicios__item--active' : ''
        }`}
        onMouseEnter={() => setActivo(index)}
        onClick={() => setActivo(index)}
      >
        <span className="dmServicios__number">
          {servicio.numero}
        </span>

        <span className="dmServicios__itemTitle">
          {servicio.titulo}
        </span>

        <i className="bi bi-arrow-up-right"></i>
      </button>
    ))}
  </div>

  <div className="dmServicios__detail">

  <div className="dmServicios__detailTop">

    <span>
      SERVICIO / {servicios[activo].numero}
    </span>

    <i
      className={`bi ${servicios[activo].icono}`}
    ></i>

  </div>


  <div className="dmServicios__detailBody">

    <h3>
      {servicios[activo].titulo}
    </h3>

    <p>
      {servicios[activo].descripcion}
    </p>

  </div>


  <div className="dmServicios__detailFooter">

    <span>
      DM METALÚRGICA
    </span>

    <span>
      ALLEN · RÍO NEGRO
    </span>

  </div>

</div>

</div>


<div className="dmServicios__worksCta">

  <div className="dmServicios__worksCtaText">
    <span>PROYECTOS REALIZADOS</span>

    <h3>
      Mirá algunos de nuestros trabajos.
    </h3>
  </div>

  <button
    className="dmServicios__worksButton"
    onClick={abrirTrabajos}
  >
    Ver trabajos realizados

    <i className="bi bi-arrow-up-right"></i>
  </button>

</div>
            </div>
        </section>
    )
}

export default Servicios