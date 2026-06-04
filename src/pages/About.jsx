import React from 'react'
import { countrydata } from '../assets/data/datastore'

const About = () => {
  
  return (
    <main className="w-full min-h-screen bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-8 md:px-20 py-16 flex flex-col items-center">
      
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-black tracking-wide text-stone-100">
          Here are the Interesting Facts <br />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mt-3 block">
            we're proud of
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {countrydata.map((item) => (
          <div 
            key={item.id} 
            className="bg-linear-to-br from-stone-900/60 to-stone-950/80 border border-stone-800/60 rounded-3xl p-8 hover:border-amber-500/20 hover:shadow-xl hover:shadow-amber-500/2 transition-all duration-300 flex flex-col space-y-4"
          >
            <h2 className="text-2xl font-black tracking-tight text-white">
              {item.country}
            </h2>
            
            <div className="flex flex-col space-y-1.5 text-xs font-medium tracking-wide">
              <p className="text-stone-400">
                <span className="text-stone-500 font-bold">Capital:</span> {item.capital}
              </p>
              <p className="text-stone-400">
                <span className="text-stone-500 font-bold">Population:</span> {item.population}
              </p>
            </div>

            <p className="text-sm text-stone-400 font-normal leading-relaxed pt-2 border-t border-stone-800/40">
              <span className="text-amber-500/90 font-bold block text-xs uppercase tracking-wider mb-1">
                Interesting Fact:
              </span>
              {item.interestingFact}
            </p>
          </div>
        ))}
      </div>

    </main>
  )
}

export default About