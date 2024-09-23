import React from 'react'

const Programas = () => {
  return (
    <div  className='animate-all duration-100'>
      <div id='programas' className=' w-full mt-[12vh] text-center py-[8vh] font-roboto font-medium text-blanco grid gap-6
      max-[1000.05px]:mt-[18vh] '>

      

        <div className='grid items-center mb-[-2vh]'>
          <h2 className=' font-bold text-[4dvw]  
          max-[1000.05px]:text-[5dvw]
          max-[720.05px]:text-[6dvw]
          max-[470.05px]:text-[7dvw]
          animate-titulo1 
        [animation-range:20vh_90vh] max-[1000.05px]:[animation-range:100vh_180vh] [animation-timeline:scroll()]
        supports-no-scroll-driven-animations:animate-none'>
            Programas y <span className='text-verde'>Tegnologías</span>
            </h2>

          <div className='bg-verde w-[29%] h-[2.5vh] mt-[1.3vh] absolute justify-self-end 
          max-[1000.05px]:w-[23%]
          max-[720.05px]:w-[16%] max-[720.05px]:h-[2vh] max-[720.05px]:mt-[1vh]
          max-[470.05px]:w-[10%]
          animate-linea 
          [animation-range:20vh_90vh] max-[1000.05px]:[animation-range:100vh_180vh] [animation-timeline:scroll()]
          supports-no-scroll-driven-animations:animate-none'>
          
          </div>

        </div>
       
        <p className='mx-[26dvw] text-[1.4dvw] leading-[4vh] font-light mb-[2vh]
        max-[1000.05px]:text-[2dvw] max-[1000.05px]:mx-[19dvw]
        max-[720.05px]:text-[1rem] max-[720.05px]:mx-[15dvw]
        max-[470.05px]:text-[0.9rem]
        animate-titulo2 
        [animation-range:20vh_90vh] max-[1000.05px]:[animation-range:100vh_180vh] [animation-timeline:scroll()]
        supports-no-scroll-driven-animations:animate-none'>
          En mi viaje por el mundo, he cultivado experiencia y habilidades en una variedad de tecnologías y programas. Mi stack incluye:
          </p>



        <div className='px-[11dvw] grid grid-cols-2 gap-8 
        max-[1000.05px]:grid-cols-1 max-[1000.05px]:gap-[52vh]'>

          <div id='programas' className='bg-negro-claro rounded-[30px] h-[20vh] 
                  animate-cuadro1 
                  [animation-range:40vh_110vh] max-[1000.05px]:[animation-range:100vh_190vh] [animation-timeline:scroll()]
                  supports-no-scroll-driven-animations:animate-none'>

            <h3 className='text-[2.2dvw] max-[1000.05px]:text-[3dvw] max-[720.05px]:text-[4dvw] max-[470.05px]:text-[5dvw]'>Programas / Diseño </h3>


            <div className='bg-verde py-[1vh] w-[100%] rounded-[30px]'>
              <div className='bg-negro-2 w-[100%] rounded-[30px] grid text-start pl-[5dvw]
              max-[1000.05px]:text-center max-[1000.05px]:pl-0'>

                <ul className='grid gap-[0.8vh] my-[3.5vh]'>
                  <h4 className='lista1'>Suite Adobe:</h4>
                  <ul className='lista2'>
                    <li>Photoshop</li>
                    <li>illustrator</li>
                    <li>InDesign</li>
                  </ul>

                  <h4 className='lista1'>Edición de video:</h4>
                  <ul className='lista2'>
                    <li>Premier Pro</li>
                    <li>Capcut</li>
                  </ul>

                  <h4 className='lista1'>Diseño UX/UI:</h4>
                  <ul className='lista2'>
                    <li>Figma</li>
                  </ul>

                  <h4 className='lista1'>Planos 2D:</h4>
                  <ul className='lista2'>
                    <li>AutoCad</li>
                  </ul>
                </ul>
              </div>
            </div>
  

          </div>

          <div id='programas' className='bg-negro-claro rounded-[30px] h-[20vh] 
          animate-cuadro2 
          [animation-range:40vh_110vh] max-[1000.05px]:[animation-range:140vh_280vh] [animation-timeline:scroll()]
          supports-no-scroll-driven-animations:animate-none'>

            <h3 className='text-[2.2dvw] max-[1000.05px]:text-[3dvw] max-[720.05px]:text-[4dvw] max-[470.05px]:text-[5dvw]'>Web / Front-end </h3>


            <div  className='bg-verde py-[1vh] w-[100%] rounded-[30px]'>
              <div className='bg-negro-2 w-[100%] rounded-[30px] grid text-start pl-[5dvw]
              max-[1000.05px]:text-center max-[1000.05px]:pl-0'>

                <ul className='grid gap-[0.8vh] my-[2.85vh] '>
                  <h4 className='lista1'>Front-end:</h4>
                  <ul className='lista2'>
                    <li>HTML</li>
                    <li>CCS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>TailwindCSS</li>
                  </ul>

                  <h4 className='lista1'>CMS:</h4>
                  <ul className='lista2'>
                    <li>WordPress (Elementor)</li>
                  </ul>

                  <h4 className='lista1'>Herramientas:</h4>
                  <ul className='lista2'>
                    <li>Git/Github</li>
                    <li>VSCode</li>
                    <li>npm</li>
                  </ul>

                </ul>
              </div>
            </div>
  
          
          </div>



    






        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Programas
