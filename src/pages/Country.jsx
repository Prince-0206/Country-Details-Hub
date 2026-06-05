import React, { useEffect, useState, useTransition } from 'react'
import { postapi } from '../assets/data/postapi';
import { Loader } from './Loader';
import { NavLink } from 'react-router-dom';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountries] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("asc") // "asc" ya "desc"

  useEffect(() => {
    startTransition(async () => {
      const golbaldata = await postapi();
      setcountries(golbaldata.data)
    })
  }, [])

  // 1. Pehle filter chalega search query ke liye
  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.common?.toLowerCase() || "";
    return countryName.includes(searchQuery.toLowerCase());
  })

  // 2. Phir filtered data sort hoga ascending/descending order mein
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    const nameA = a.name?.common?.toLowerCase() || "";
    const nameB = b.name?.common?.toLowerCase() || "";
    
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  })

  if (isPending) return <Loader />

  return (
    <main className="w-full min-h-screen bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-8 md:px-20 py-12 flex flex-col items-center">
      
      {/* Search and Sort Toolbar */}
      <div className="w-full max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
        
        {/* Search Input Box */}
        <div className="w-full max-w-md relative group">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search country by name..."
            className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-5 py-3.5 pl-12 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600 group-focus-within:text-amber-500/70 transition-colors pointer-events-none text-lg">
            &#x1F50D;
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-amber-500 transition-colors"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Dynamic Ascending / Descending Button */}
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="w-full sm:w-auto bg-stone-900/60 hover:bg-stone-900 border border-stone-800 hover:border-amber-500/30 text-stone-300 hover:text-white flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
        >
          <span>Sort:</span>
          <span className="text-amber-500 font-black">
            {sortOrder === "asc" ? "A to Z \u2191" : "Z to A \u2193"}
          </span>
        </button>

      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        {sortedCountries.length > 0 ? (
          sortedCountries.map((curCountry, index) => {
            const { name, flags, population, region, capital } = curCountry;
            
            return (
              <div 
                key={index} 
                className="bg-linear-to-br from-[#1b1517]/90 to-[#100b0d]/95 border border-stone-800/50 rounded-3xl p-6 flex flex-col space-y-5 hover:border-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/2 transition-all duration-300"
              >
                <div className="w-full aspect-16/10 bg-stone-950/40 rounded-2xl overflow-hidden border border-stone-900 flex items-center justify-center">
                  <img 
                    src={flags?.svg || flags?.png} 
                    alt={name?.common || "Country Flag"} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col space-y-3 grow">
                  <h2 className="text-lg font-black tracking-tight text-stone-100 whitespace-nowrap overflow-hidden text-ellipsis">
                    {name?.common?.length > 15 ? `${name?.common.slice(0, 15)}...` : name?.common}
                  </h2>

                  <div className="flex flex-col space-y-1.5 text-xs font-medium tracking-wide">
                    <p className="text-stone-400">
                      <span className="text-stone-500 font-bold">Population:</span>{" "}
                      {population?.toLocaleString() || "N/A"}
                    </p>
                    <p className="text-stone-400">
                      <span className="text-stone-500 font-bold">Region:</span>{" "}
                      {region || "N/A"}
                    </p>
                    <p className="text-stone-400 whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="text-stone-500 font-bold">Capital:</span>{" "}
                      {Array.isArray(capital) ? capital[0] : capital || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <NavLink to={`/country/${name?.common}`}>
                    <button className="w-full group flex items-center justify-center gap-2 bg-stone-900/60 hover:bg-amber-500 hover:text-black border border-stone-800 hover:border-amber-500 active:scale-[0.98] text-stone-300 font-bold uppercase text-[10px] tracking-widest py-3 rounded-xl transition-all duration-200">
                      Read More 
                      <span className="transform group-hover:translate-x-0.5 transition-transform">
                        &rarr;
                      </span>
                    </button>
                  </NavLink>
                </div>

              </div>
            )
          })
        ) : (
          <div className="col-span-full text-center py-20 text-stone-600 font-medium tracking-wide text-sm">
            No countries match your search query.
          </div>
        )}
      </div>

    </main>
  )
}

export default Country