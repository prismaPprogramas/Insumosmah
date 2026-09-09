import React from 'react'

const Prese = () => {
  return (
    <section className="dmPresentacion" id="empresa">

      <div className="dmPresentacion__container">

        {/* CABECERA */}
        <div className="dmPresentacion__header">

          <div className="dmPresentacion__section">
            <div className="dmPresentacion__line"></div>

            <span>SOBRE DM</span>
          </div>

          <span className="dmPresentacion__code">
            DM / METALÚRGICA
          </span>

        </div>


        {/* CUERPO */}
        <div className="dmPresentacion__body">

          <div className="dmPresentacion__left">

            <span className="dmPresentacion__mini">
              TRABAJO · PRECISIÓN · COMPROMISO
            </span>

            <h2>
              Del metal
              <br />
              al <span>proyecto.</span>
            </h2>

          </div>


          <div className="dmPresentacion__right">

            <p className="dmPresentacion__lead">
              En DM Metalúrgica transformamos ideas y necesidades
              en soluciones concretas, trabajando cada proyecto
              con atención en los detalles y en el resultado final.
            </p>

            <div className="dmPresentacion__text">

              <p>
                Realizamos trabajos de fabricación y desarrollo
                metalúrgico adaptándonos a las características de
                cada proyecto, desde piezas y estructuras hasta
                soluciones realizadas a medida.
              </p>

              <p>
                Combinamos experiencia, trabajo y precisión para
                lograr resultados resistentes, funcionales y
                preparados para responder a las exigencias de
                cada trabajo.
              </p>

            </div>

          </div>

        </div>


        {/* FRANJA INFERIOR */}
        <div className="dmPresentacion__footer">

          <div className="dmPresentacion__footerTitle">
            <span>DM</span>

            <p>
              METALÚRGICA
            </p>
          </div>


          <div className="dmPresentacion__qualities">

            <div>
              <span>01</span>
              <p>Fabricación<br />a medida</p>
            </div>

            <div>
              <span>02</span>
              <p>Soluciones<br />resistentes</p>
            </div>

            <div>
              <span>03</span>
              <p>Atención<br />personalizada</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Prese