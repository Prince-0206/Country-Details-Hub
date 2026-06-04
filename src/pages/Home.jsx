import React from 'react'
import About from './About'

const Home = () => {
  return (
    <main className="h-full bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-8 md:px-20 py-12 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto ">
            
            <div className="flex flex-col items-start space-y-6">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight mt-50 ">
                    Explore the World, One <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-orange-500">
                        Country at a Time.
                    </span>
                </h1>
                
                <p className="text-sm md:text-base text-stone-400 max-w-md font-medium leading-relaxed tracking-wide">
                    Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                </p>
                
                <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-200">
    Start Exploring <span>&rarr;</span>
</button>
            </div>

            <div className="flex justify-center md:justify-end w-full">
                <div className="relative max-w-md md:max-w-xl asset-container">
                    <img 
                        src="world.png" 
                        alt="World Monuments Illustration" 
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
                    />
                </div>
            </div>

        </div>

        <About />

       

    </main>
  )
}

export default Home