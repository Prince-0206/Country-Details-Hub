import React from 'react'

export const Loader = () => {
  return (
     <div className="fixed inset-0 w-full h-screen bg-gradient-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] z-[9999] flex flex-col items-center justify-center space-y-6 select-none">
      
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Decorative background glow blur */}
        <div className="absolute w-16 h-16 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
        
        {/* Outer Animated Spinning Track Line */}
        <div className="w-16 h-16 border-4 border-stone-800/40 rounded-full absolute" />
        
        {/* Inner Amber Loading Ring */}
        <div className="w-16 h-16 border-4 border-transparent border-t-amber-500 border-r-amber-500/50 rounded-full absolute animate-spin" />
      </div>

      <div className="text-center">
        <h3 className="text-sm font-black uppercase tracking-[0.4em] text-stone-200 animate-pulse">
          Loading <span className="text-amber-500">Atlas</span>
        </h3>
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-600 mt-1.5">
          Fetching Global Data
        </p>
      </div>

    </div>
  )
}
