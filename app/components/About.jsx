import React from 'react'
import playstationWallpaper from '../../public/playstationWallpaper.png'

const About = () => {
  return (
    <section id='about-section' className='w-full h-[800px] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${playstationWallpaper.src})` }}
>
      
      {/* Opacité */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Bouton Commander */}
      <div className='absolute bottom-16 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <button type='button' className='rounded-md text-gray-100 font-semibold p-2 bg-transparent border-solid border-2 border-gray-100 transition-all duration-150 hover:rounded-lg hover:scale-110'>COMMANDER</button>
      </div>
    </section>
  )
}

export default About
