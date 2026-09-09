import React from 'react'

const marcas = [
    'Loma Negra',
    'Klaukol',
    'Sika',
    'Sherwin Williams',
    'FV',
    'Ferrum'
]

const ProyectoProductos = () => {

    return (
        <section className="glg-proyecto">

            <div className="glg-proyecto__container">

                {/* =====================================
                    IMAGEN
                ===================================== */}

                <div className="glg-proyecto__visual">

                    <img
                        src="https://res.cloudinary.com/heql2txb/image/upload/v1788800686/9c9b89c7f3e188058d1e49158612dda5.jpg"
                        alt="Materiales para construcción Corralón GLG"
                    />

                    <div className="glg-proyecto__visual-label">
                        <span>DESDE EL PRIMER MATERIAL</span>
                        <strong>HASTA EL ÚLTIMO DETALLE.</strong>
                    </div>

                </div>


                {/* =====================================
                    CONTENIDO
                ===================================== */}

                <div className="glg-proyecto__content">

                    <span className="glg-proyecto__eyebrow">
                        TODO PARA TU OBRA
                    </span>

                    <h2>
                        Tu proyecto
                        <span> empieza acá.</span>
                    </h2>

                    <p className="glg-proyecto__intro">
                        Construcción, ferretería, pinturas, sanitarios,
                        electricidad y terminaciones.
                        Encontrá en GLG soluciones para cada etapa de tu obra.
                    </p>


                    {/* PRODUCTOS */}

                    <div className="glg-proyecto__productos">

                        <div>
                            <i className="bi bi-bricks"></i>
                            <span>Construcción</span>
                        </div>

                        <div>
                            <i className="bi bi-hammer"></i>
                            <span>Ferretería</span>
                        </div>

                        <div>
                            <i className="bi bi-paint-bucket"></i>
                            <span>Pinturas</span>
                        </div>

                        <div>
                            <i className="bi bi-droplet"></i>
                            <span>Sanitarios</span>
                        </div>

                    </div>


                    {/* CTA */}

                    <div className="glg-proyecto__acciones">

                        <a
                            href="https://wa.me/5490000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="glg-proyecto__btn glg-proyecto__btn--primary"
                        >
                            <i className="bi bi-whatsapp"></i>
                            Pedir presupuesto
                        </a>

                        <a
                            href="#productos"
                            className="glg-proyecto__btn glg-proyecto__btn--secondary"
                        >
                            Ver productos

                            <i className="bi bi-arrow-up-right"></i>
                        </a>

                    </div>


                    {/* MARCAS */}

                    <div className="glg-proyecto__marcas">

                        <span className="glg-proyecto__marcas-title">
                            MARCAS Y PRODUCTOS PARA TU PROYECTO
                        </span>

                        <div className="glg-proyecto__marcas-list">

                            {marcas.map((marca) => (
                                <span key={marca}>
                                    {marca}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ProyectoProductos