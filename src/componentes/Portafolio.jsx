import React from 'react'

const Portafolio = () => {
  return (
    <div  className='animate-all duration-100'>

    <div id='portafolio' className='font-roboto text-blanco text-center grid w-full pb-[50px] items-center '>  
        <div className='bg-verde h-[0.7rem] w-[45dvw]  absolute self-start rotate-[-14deg] mt-[26vh] ml-[-3rem]'></div>
        <div className='bg-verde h-[0.7rem] w-[45dvw]  absolute self-start rotate-[-14deg] mt-[42vh] ml-[-9rem]'></div>
        
    
    

        <div className='grid items-center mt-[29vh] '>
            <h2 className=' font-bold text-[4.5dvw] 
              max-[1000.05px]:text-[6dvw]
              max-[720.05px]:text-[2.8rem]
            '>
                Portafolio
            </h2>

            <div className='bg-verde w-[40%] h-[2.5vh] mt-[1.3vh] absolute justify-self-end 
              max-[1000.05px]:w-[35%]
              max-[720.05px]:w-[33%] max-[720.05px]:h-[2vh] max-[720.05px]:mt-[1vh]
              max-[640.05px]:w-[29%]
              max-[470.05px]:w-[22%]'>
            </div>


        </div>

        
        <div className='grid grid-cols-2 mx-[25dvw] gap-[5rem] text-[1dvw] mt-[20px]
        max-[1060.05px]:grid-cols-1 max-[1060.05px]:gap-[2rem] max-[1060.05px]:mt-[60px]'>
        <a href="https://www.behance.net/gallery/176233835/Portafolio-Ricardd-Job-G" target="_blank" className=' text-[22px]  bg-verde px-[3dvw] py-[0.7vh] rounded-l-[20px] rounded-br-[40px] text-negro-2 font-bold  text-center
             hover:bg-emerald-400 hover:scale-[0.9] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[20px]   max-[1000.05px]:hover:scale-[1] max-[1000.05px]:hover:bg-verde
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[18px] 
            '>Diseño Grafico</a>

             <a  href="https://www.behance.net/gallery/195804351/Videos-Ricardd-Job-G" target="_blank" className=' text-[22px] hover:opacity-80 bg-blanco px-[3.3dvw] py-[0.7vh] rounded-l-[20px] rounded-br-[40px] text-negro-2 font-bold text-center
             hover:scale-[0.9] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[20px]  max-[1000.05px]:hover:scale-[1] max-[1000.05px]:hover:opacity-100
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[18px]
             '>Edición de Video</a>
        </div>



        <h3 className=' font-bold text-[3dvw] text-verde mt-[60px] mb-[10px]
              max-[1000.05px]:text-[4dvw]
              max-[720.05px]:text-[1.8rem]
            '>
              Desarrollo Web
        </h3>

   

        <div className='h-[200px] w-[100dvw] grid grid-cols-2 justify-items-center gap-[0px] px-[350px]'>

            <a href="https://ricarddjob.github.io/OUT/" target="_blank" className=' hover:opacity-75 transition-all animate-all hover:scale-[0.95]
            max-[1000.05px]:hover:scale-[1] max-[1000.05px]:hover:opacity-100

            max-[600.05px]:scale-[0.85] max-[600.05px]:hover:scale-[0.85] 
            max-[500.05px]:scale-[0.70] max-[500.05px]:hover:scale-[0.70]
            max-[480.05px]:scale-[0.60] max-[480.05px]:hover:scale-[0.60]
            '>
                <div 
                 className='bg-negro-2 h-full w-[500px] rounded-[20px] overflow-hidden drop-shadow-lg text-left' >
                  <img src="./out.jpg" alt=""  className='w-full '/>
                  <div className='px-[25px] my-[20px]'>
                    <h4 className='text-verde text-[30px] font-bold mt-[20px]'>Diseño y Desarrollo Front-End</h4>
                    <p className='text-[27px] mt-[-10px] '>Marca: <i className='font-light'>Out Creative Lab</i></p>
                    <h5 className='text-[27px] font-bold text-verde '>Tecnologías usadas:</h5> 
                    <p className='text-[25px] font-light mt-[-10px]'>HTML, React, Vite, Tailwind CSS, NPM y Git</p>
                  </div>
                </div>
            </a>

            <a href="https://tecnave.net/" target="_blank" className=' hover:opacity-75 transition-all animate-all hover:scale-[0.95]
            max-[1000.05px]:hover:scale-[1] max-[1000.05px]:hover:opacity-100

            max-[600.05px]:scale-[0.85] max-[600.05px]:hover:scale-[0.85] 
            max-[500.05px]:scale-[0.70] max-[500.05px]:hover:scale-[0.70]
            max-[480.05px]:scale-[0.60] max-[480.05px]:hover:scale-[0.60]
            '>
                <div 
                 className='bg-negro-2 h-full w-[500px] rounded-[20px] overflow-hidden drop-shadow-lg text-left' >
                  <img src="./tecnave.jpg" alt=""  className='w-full '/>
                  <div className='px-[25px] my-[20px]'>
                    <h4 className='text-verde text-[30px] font-bold mt-[20px]'>Diseño y Desarrollo Web</h4>
                    <p className='text-[27px] mt-[-10px] '>Marca: <i className='font-light'>Tecnave</i></p>
                    <h5 className='text-[27px] font-bold text-verde '>Tecnologías usadas:</h5> 
                    <p className='text-[25px] font-light mt-[-10px]'>WordPress y Elementor</p>
                  </div>
                </div>
            </a>

        </div>





        <div className='border-b border-verde w-[15rem] grid justify-self-end mt-[150px] justify-start max-[1000.05px]:mt-[210px]'>
            <p className='text-[20px]'>© 2024 RicarddJob.</p>
        </div>



        
    </div>

    </div>
  )
}

export default Portafolio
