import React from 'react'

const Header = () => {
  return (
    <>
      <div id='inicio' className='text-blanco pt-16 w-full h-[100dvh] grid grid-cols-2 items-center justify-items-center font-roboto
      max-[1000.05px]:grid-cols-1 max-[1000.05px]:grid-rows-2 max-[1000.05px]:gap-[1.8rem] max-[1000.05px]:h-[180dvh] max-[1000.05px]:mb-[-32dvh]
      max-[720.05px]:gap-[0.7rem]
      max-[470.05px]:gap-[0]'>


            <div className='bg-verde absolute left-[11dvw] translate-y-[-2.5dvh] w-[65dvw] h-[50dvh] justify-self-start rounded-[50px] 
             max-[1000.05px]:hidden
             '></div>

            <span className='absolute w-24 h-24 bg-verde rounded-full translate-x-[6dvw] translate-y-[27dvh] max-[1000.05px]:hidden
            animate-circulo3 
            [animation-range:0px_500px] [animation-timeline:scroll()]
            supports-no-scroll-driven-animations:animate-none' ></span>
            <span className='absolute w-20 h-20 bg-verde rounded-full translate-x-[-3dvw] translate-y-[27dvh] max-[1000.05px]:hidden
            animate-circulo4
            [animation-range:0px_500px] [animation-timeline:scroll()]
            supports-no-scroll-driven-animations:animate-none' ></span>
            
            <div className='bg-negro-2 relative left-[11dvw] translate-y-[2.5dvh] w-[65dvw] h-[50dvh] justify-self-start rounded-[50px] pl-12 pt-7 grid 
            max-[1000.05px]:left-[0dvw] max-[1000.05px]:justify-self-center max-[1000.05px]:text-center max-[1000.05px]:px-0
             max-[1000.05px]:h-[45dvh] max-[1000.05px]:bg-negro max-[1000.05px]:w-full max-[1000.05px]:mt-[0dvh]   max-[1000.05px]:static
            
           max-[720.05px]:h-[40dvh] 
            max-[470.05px]:h-[36dvh]'>

            

                
                <p className='text-verde font-roboto font-medium text-[1.8dvw] 
                max-[1000.05px]:text-[1.5rem] max-[1000.05px]:mt-[1.5dvh]
              
                max-[600.05px]:text-[1.2rem]'
                >Hello, I am a</p>
                <h1 className='text-[5.2dvw] font-roboto font-medium leading-[11dvh] mr-[15dvw]  max-[1070.05px]:text-[4.5dvw] max-[1070.05px]:leading-[9dvh]
                max-[1000.05px]:mx-auto max-[1000.05px]:text-[3rem]

                max-[720.05px]:text-[3rem] max-[720.05px]:leading-[3.2rem] max-[720.05px]:mt-[-3dvh]

                max-[470.05px]:text-[2.5rem] 
                max-[380.05px]:text-[2rem] max-[380.05px]:leading-[2.6rem]'
                >
                    Graphic Designer <span className='text-verde'>and</span> <br className='max-[380.05px]:hidden' /> Frontend Developer
                </h1>
                <a href="#programas"><img 
                src="/zigzag1.svg" 
                alt="" 
                className='animete-all duration-300 delay-300  relative h-[9dvh] animate-bounce ml-[40dvw] mt-[4dvh] hover:drop-shadow-[0_2px_2px_rgba(114,242,133,1.00)]
                max-[1000.05px]:m-auto max-[1000.05px]:h-[8dvh] max-[1000.05px]:hidden
                max-[720.05px]:h-[7dvh]
                max-[470.05px]:h-[6.8dvh] max-[470.05px]:mt-[-1dvh]'/></a>
                

                
            </div>

            <img 
            src="/llave-verde.svg" 
            alt="" 
            className='absolute h-[60dvh] translate-x-[41dvw] translate-y-[5dvh]
            max-[1000.05px]:hidden'  />

            <div className='bg-negro-claro right-[11dvw] relative w-[25dvw] h-[80dvh] align-top justify-self-end rounded-[30px] rounded-tr-[120px] grid justify-items-center text-center
            max-[1000.05px]:justify-self-center max-[1000.05px]:right-auto max-[1000.05px]:w-[55dvw] max-[1000.05px]:mt-auto max-[1000.05px]:rounded-tl-[15dvw] 
            max-[1000.05px]:rounded-br-[15dvw] max-[1000.05px]:rounded-tr-[30px]  max-[1000.05px]:static
            max-[720.05px]:w-[75dvw]
            animate-cuadro3 
            [animation-range:0dvh_0dvh] max-[1000.05px]:[animation-range:0dvh_70dvh] [animation-timeline:scroll()]
            supports-no-scroll-driven-animations:animate-none'
            >
                <img 
                src="/ricardd.svg" 
                alt="ricardd" 
                className='h-[34dvh] rounded-full mb-[-3dvh] mt-[-1dvh]'
                />
                
                    <p className='text-verde font-light text-[1.5dvw] mb-[-2dvh]
                    max-[1000.05px]:text-[2dvw] 
                    max-[720.05px]:text-[3dvw]
                    max-[500.05px]:text-[4dvw]'>Licenciado</p>
                    <p className='text-blanco font-bold text-[3dvw] mb-[-1dvh]
                    max-[1000.05px]:text-[4.5dvw] max-[1000.05px]:mt-[-0.6dvh]
                    max-[720.05px]:text-[6dvw]
                    max-[500.05px]:text-[7dvw]'>Ricardd Job</p>
                    <p className='text-blanco font-medium text-[1.2dvw]
                    max-[1000.05px]:text-[1.8dvw] max-[1000.05px]:mt-[-1dvh]
                    max-[720.05px]:text-[2.8dvw]
                    max-[500.05px]:text-[3.5dvw] max-[500.05px]:mt-[-2dvh]'>13/Nov/1996</p>
                
            
                <span className='bg-white/15 rounded-br-[50px] w-[25dvw] grid justify-items-center p-[1.5dvh] my-[1dvh] gap-1 
                max-[1000.05px]:w-[100%] max-[1000.05px]:rounded-br-[50px] max-[1000.05px]:mt-[-1dvh]'>
                    <span className='flex items-center gap-2'>
                        <img src="/iconos-correo.svg" alt="" className='h-[1.7rem] max-[720.05px]:h-[4.5dvw] max-[500.05px]:h-[5dvw]' />
                        
                        <p className='text-blanco font-medium text-[1.5dvw]
                        max-[1000.05px]:text-[2.4dvw]
                        max-[720.05px]:text-[2.8dvw]
                        max-[500.05px]:text-[3.5dvw]'>ricarddJob@gmail.com</p>
                    </span>

                    <span className='flex items-center gap-2'>
                        <img src="/iconos-ws.svg" alt="" className='h-[1.7rem] max-[720.05px]:h-[4.5dvw] max-[500.05px]:h-[5dvw]'/>
                        <p className='text-verde font-medium text-[1.5dvw]
                        max-[1000.05px]:text-[2.4dvw]
                        max-[720.05px]:text-[2.8dvw]
                        max-[500.05px]:text-[3.5dvw]
                        '>+58 412-1401376</p>
                    </span>
                </span>
                <img src="/ojo.svg" alt="" className='h-[12dvh] mt-[1dvh] max-[1000.05px]:h-[10dvh]' />
                <p className='text-blanco font-l text-[1.5dvw] mb-[1dvh] 
                max-[1000.05px]:text-[2.5dvw] max-[1000.05px]:mb-[0dvh]
                max-[720.05px]:text-[2.8dvw]
                max-[500.05px]:text-[3.5dvw]'>Venezuela - Zulia</p>
            </div>

            <span className='absolute w-5 h-5 bg-verde rounded-full justify-self-end translate-x-[-6dvw] translate-y-[-35dvh]
            max-[1000.05px]:translate-x-[-9dvw] max-[1000.05px]:w-3 max-[1000.05px]:h-3 max-[1000.05px]:translate-y-[-90dvw]' ></span>
            <span className='absolute w-2 h-2 bg-verde rounded-full translate-x-[5dvw] translate-y-[-38dvh] max-[1000.05px]:hidden' ></span>
            <span className='absolute w-4 h-4 bg-verde rounded-full translate-x-[-35dvw] translate-y-[36dvh]  max-[1000.05px]:translate-y-[-10dvh] ' ></span>

            <span className='absolute w-20 h-40 bg-verde rounded-r-full justify-self-start translate-y-[33dvh]
            max-[1000.05px]:hidden
            animate-circulo2 
            [animation-range:0px_500px] [animation-timeline:scroll()]
            supports-no-scroll-driven-animations:animate-none' ></span>

            <span className='absolute w-12 h-24 bg-verde rounded-r-full justify-self-start translate-y-[12dvh]
            max-[1000.05px]:hidden
            animate-circulo1 
            [animation-range:0px_500px] [animation-timeline:scroll()]
            supports-no-scroll-driven-animations:animate-none' ></span>

            
            


      </div>
    </>
  )
}

export default Header
