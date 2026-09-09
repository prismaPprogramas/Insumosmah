import React from 'react'
import Hero from './Hero'
import Prese from './Prese.js'
import Servicios from './Servicios.js'
import PorQueDM from './PorQueDM.js'
import Contacto from './Contacto.js'

const Main = ({ abrirTrabajos }) => {

  return (
    <div>
        <Hero />
        <Prese />
        <Servicios abrirTrabajos={abrirTrabajos} />
        <PorQueDM />
        <Contacto />
    </div>
  )
}

export default Main
