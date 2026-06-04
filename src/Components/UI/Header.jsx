import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const navs = [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Country', path: '/country' },
          { name: 'Contact', path: '/contact' },
        ]
  return (
    <header className="w-full bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-8 md:px-20 py-6 flex items-center justify-between border-b border-amber-900/30 shadow-2xl">
      
      <div>
        <NavLink to="/" className="text-3xl font-bold tracking-tight text-white">
          Globe<span className='text-amber-500'>Stats</span>
        </NavLink>
      </div>

      <nav className="flex items-center gap-10 text-sm font-medium tracking-wider text-stone-300">
        {navs.map((link, idx) => (
          <NavLink 
            key={idx} 
            to={link.path} 
            className={({ isActive }) => `
              relative pb-1 transition-colors duration-200 hover:text-amber-400
              ${isActive ? 'text-amber-500 border-b-2 border-amber-500' : ''}
            `}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

    </header>
  )
}