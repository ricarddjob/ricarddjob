import React from 'react'
import NavBar1 from '../componentes/NavBar1'
import Header from '../componentes/Header'
import Programas from '../componentes/Programas'
import Barra from '../componentes/Barra'
import Experiencia from '../componentes/Experiencia'
import Portafolio from '../componentes/Portafolio'


export const Home = () => {
  return (
    <>
    <NavBar1 />
    <Header />
    <Barra />
    <Programas />
    <div id='experiencia' className='absolute mt-[20dvh]'></div>
    <Experiencia />
    <Portafolio />
    

    
    </>
  )
}
