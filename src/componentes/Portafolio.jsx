import React from 'react'

const Portafolio = () => {
  return (
    <>

    <div id='portafolio' className='font-roboto text-blanco text-center grid w-full   h-[97dvh] items-center '>  
        <div className='bg-verde h-[0.7rem] w-[45dvw]  absolute self-start rotate-[-14deg] mt-[26dvh] ml-[-3rem]'></div>
        <div className='bg-verde h-[0.7rem] w-[45dvw]  absolute self-start rotate-[-14deg] mt-[42dvh] ml-[-9rem]'></div>
        
    
    

        <div className='grid items-center mt-[29dvh] '>
            <h2 className=' font-bold text-[4.5dvw] 
              max-[1000.05px]:text-[6dvw]
              max-[720.05px]:text-[2.8rem]
            '>
                Portafolio
            </h2>

            <div className='bg-verde w-[40%] h-[2.5dvh] mt-[1.3dvh] absolute justify-self-end 
              max-[1000.05px]:w-[35%]
              max-[720.05px]:w-[33%] max-[720.05px]:h-[2dvh] max-[720.05px]:mt-[1dvh]
              max-[640.05px]:w-[29%]
              max-[470.05px]:w-[22%]'>
            </div>


        </div>

        
        <div className='flex justify-center gap-[5rem] mt-[-20dvh] text-[1dvw]'>
        <a href="https://www.behance.net/gallery/176233835/Portafolio-Ricardd-Job-G" target="_blank" className=' bg-verde px-[3dvw] py-[0.7dvh] rounded-l-[20px] rounded-br-[40px] text-negro-2 font-black  text-center
             hover:bg-emerald-400 hover:px-[4dvw] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[1.1rem] max-[1000.05px]:hover:px-[2.8rem]
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[1rem] max-[720.05px]:hover:px-[2.3rem]
            '>Behance</a>

             <a  href="https://www.behance.net/gallery/195804351/Videos-Ricardd-Job-G" target="_blank" className=' bg-blanco px-[3.3dvw] py-[0.7dvh] rounded-l-[20px] rounded-br-[40px] text-negro-2 font-bold text-center
             hover:px-[4.4dvw] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[1.1rem] max-[1000.05px]:hover:px-[2.8rem]
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[1rem] max-[720.05px]:hover:px-[2.3rem]
             '>Video</a>
        </div>

 

        <div className='border-b border-verde w-[13rem] grid justify-self-end  justify-start '>
            <p>© 2024 RicarddJob.</p>
        </div>

        
    </div>

    </>
  )
}

export default Portafolio
