import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Errorpage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center px-6 text-center selection:bg-indigo-500/30">
      
      <div className="relative mb-4">
        <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter text-slate-900 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest bg-[#0B0F19] px-4 py-1 rounded-md border border-slate-800">
            Page Not Found
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <h2 className="text-xl font-semibold text-slate-200 mb-2">
          Oops! You are on a wrong page
        </h2>
        
        {error && (
          <p className="text-sm font-mono text-rose-400 bg-rose-950/20 border border-rose-900/40 rounded-xl px-4 py-2 mt-4 inline-block shadow-inner max-w-full overflow-hidden text-ellipsis">
            {error.statusText || error.data || "Unknown Routing Error"}
          </p>
        )}
      </div>

      <NavLink to="/">
        <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 border border-indigo-500/30">
          Go Back Home
        </button>
      </NavLink>
      
    </div>
  )
}

export default Errorpage