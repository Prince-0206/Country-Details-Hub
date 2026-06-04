import React from 'react'
import { IoLocationSharp, IoCallSharp, IoMailOpenSharp } from 'react-icons/io5'

export const Footer = () => {
  const footerData = [
    {
      id: 1,
      icon: <IoLocationSharp className="text-amber-500 text-2xl" />,
      title: "Find us",
      detail: "Pune, Maharashtra"
    },
    {
      id: 2,
      icon: <IoCallSharp className="text-amber-500 text-2xl" />,
      title: "Call us",
      detail: "9876543211"
    },
    {
      id: 3,
      icon: <IoMailOpenSharp className="text-amber-500 text-2xl" />,
      title: "Mail us",
      detail: "hello@worldatlas.com"
    }
  ]

  return (
    <footer className="w-full bg-[#0c0a09] border-t border-amber-900/10 text-white font-medium selection:bg-amber-500/20">
      
      {/* Top Section: Contact Badges */}
      <div className="w-full max-w-7xl mx-auto px-8 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
        {footerData.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 md:justify-start lg:justify-center">
            <div className="p-3 bg-stone-900/60 border border-stone-800/40 rounded-2xl shadow-inner flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-black tracking-wide text-stone-100">
                {item.title}
              </h4>
              <p className="text-xs text-stone-400 mt-0.5 tracking-wider">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Copyright Info */}
      <div className="w-full border-t border-stone-900/60 bg-[#080706]">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 tracking-wider">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved{" "}
            <span className="text-amber-500/80 font-bold hover:text-amber-400 transition-colors cursor-pointer">
              WorldAtlas
            </span>
          </p>
          <div className="flex items-center space-x-6 mt-2 md:mt-0 text-[11px] uppercase font-bold text-stone-600">
            <span className="hover:text-amber-500/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-500/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>

    </footer>
  )
}