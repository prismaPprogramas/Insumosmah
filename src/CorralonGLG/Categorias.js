import React from 'react'

const categorias = [
    {
        titulo: 'Construcción',
        descripcion: 'Materiales esenciales para cada etapa de tu obra.',
        icono: 'bi-bricks',
        clase: 'verde'
    },
    {
        titulo: 'Ferretería',
        descripcion: 'Herramientas, accesorios y soluciones para todos los días.',
        icono: 'bi-hammer',
        clase: 'naranja'
    },
    {
        titulo: 'Pinturas',
        descripcion: 'Color, protección y terminaciones para transformar tus espacios.',
        icono: 'bi-paint-bucket',
        clase: 'violeta'
    },
    {
        titulo: 'Sanitarios',
        descripcion: 'Todo lo necesario para baños, cocina e instalaciones.',
        icono: 'bi-droplet',
        clase: 'celeste'
    },
    {
        titulo: 'Electricidad',
        descripcion: 'Productos para instalaciones seguras y funcionales.',
        icono: 'bi-lightning-charge',
        clase: 'amarillo'
    },
    {
        titulo: 'Terminaciones',
        descripcion: 'Los detalles que hacen que una obra se sienta terminada.',
        icono: 'bi-grid-3x3-gap',
        clase: 'gris'
    }
]

const Categorias = () => {
    return (
        <section className="glg-categorias" id="productos">

            <div className="glg-categorias__container">

                <div className="glg-categorias__header">

                    <span className="glg-categorias__eyebrow">
                        TODO PARA TU PROYECTO
                    </span>

                    <h2>
                        Encontrá lo que necesitás
                        <span> para hacerlo realidad.</span>
                    </h2>

                    <p>
                        Desde los primeros materiales hasta los últimos detalles,
                        en GLG encontrás soluciones para cada etapa de tu obra.
                    </p>

                </div>


                <div className="glg-categorias__grid">

                    {categorias.map((categoria, index) => (

                        <article
                            className={`glg-categoria glg-categoria--${categoria.clase}`}
                            key={categoria.titulo}
                        >

                            <div className="glg-categoria__top">

                                <span className="glg-categoria__numero">
                                    0{index + 1}
                                </span>

                                <div className="glg-categoria__icon">
                                    <i className={`bi ${categoria.icono}`}></i>
                                </div>

                            </div>


                            <div className="glg-categoria__content">

                                <h3>
                                    {categoria.titulo}
                                </h3>

                                <p>
                                    {categoria.descripcion}
                                </p>

                            </div>


                            <div className="glg-categoria__arrow">
                                <i className="bi bi-arrow-up-right"></i>
                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Categorias