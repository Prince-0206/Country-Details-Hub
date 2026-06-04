import React, { useEffect, useState, useTransition } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Loader } from '../../pages/Loader'

export const CountryCard = () => {
  const { name } = useParams()
  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const data = await res.json()
        if (data && data.length > 0) {
          setCountry(data[0])
        }
      } catch (error) {
        console.error("Fetch single country error:", error)
      }
    })
  }, [name])

  if (isPending) return <Loader />
  if (!country) return <div className="text-center text-stone-500 mt-20">Country data not found.</div>

  return (
    <main className="w-full min-h-screen bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-8 md:px-20 py-16 flex items-center justify-center">
      
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="w-full aspect-[16/10] bg-stone-950/20 border border-stone-900/60 rounded-3xl overflow-hidden p-2 shadow-2xl shadow-black/40">
          <img 
            src={country.flags?.svg || country.flags?.png} 
            alt={country.name?.common || "Flag"} 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-stone-100">
              {country.name?.common}
            </h1>
          </div>

          <div className="flex flex-col space-y-4 text-sm font-medium tracking-wide text-stone-400">
            <p>
              <span className="text-stone-500 font-bold mr-2">Native Names:</span>
              {Object.values(country.name?.nativeName || {})[0]?.common || country.name?.common}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Population:</span>
              {country.population?.toLocaleString() || "0"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Region:</span>
              {country.region || "N/A"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Sub Region:</span>
              {country.subregion || "N/A"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Capital:</span>
              {Array.isArray(country.capital) ? country.capital[0] : country.capital || "N/A"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Top Level Domain:</span>
              {country.tld?.[0] || "N/A"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Currencies:</span>
              {Object.values(country.currencies || {}).map(c => c.name).join(', ') || "N/A"}
            </p>
            <p>
              <span className="text-stone-500 font-bold mr-2">Languages:</span>
              {Object.values(country.languages || {}).join(', ') || "N/A"}
            </p>
          </div>

          <div className="pt-4">
            <NavLink to="/country">
              <button className="group flex items-center gap-2 bg-stone-900/60 hover:bg-amber-500 hover:text-black border border-stone-800 hover:border-amber-500 active:scale-[0.98] text-stone-300 font-bold uppercase text-[10px] tracking-widest py-3.5 px-8 rounded-xl transition-all duration-200">
                <span>&larr;</span> Back to Countries
              </button>
            </NavLink>
          </div>
        </div>

      </div>

    </main>
  )
}