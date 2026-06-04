import React from 'react'

const Contact = () => {
  const handleFormSubmit = (FormData) => {
    const formvalues = Object.fromEntries(FormData.entries())
    console.log(formvalues);
  }

  return (
    <main className="w-full min-h-screen bg-linear-to-r from-[#1c0a10] via-[#0c0a09] to-[#1c120c] text-white px-6 py-6 flex flex-col items-center justify-center">
      
      <div className="w-full max-w-2xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-black tracking-tight text-white">
          Contact Us
        </h1>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-linear-to-b from-[#221c1e] to-[#171214] border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.05)] p-10 rounded-3xl backdrop-blur-md relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-amber-500/40 before:to-transparent">
        <form action={handleFormSubmit} className="flex flex-col space-y-6">
          
          <div className="flex flex-col">
            <input 
              type="text" 
              name="username"
              required
              placeholder="Enter Your Name" 
              className="w-full bg-[#0c0a0b]/80 border border-stone-800 rounded-xl px-6 py-4 text-base text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <input 
              type="email" 
              name="email"
              required
              placeholder="Enter Your Email" 
              className="w-full bg-[#0c0a0b]/80 border border-stone-800 rounded-xl px-6 py-4 text-base text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <textarea 
              name="message"
              required
              rows="6" 
              placeholder="Enter Your Message" 
              className="w-full bg-[#0c0a0b]/80 border border-stone-800 rounded-xl px-6 py-4 text-base text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 resize-none transition-all duration-200"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black uppercase text-xs tracking-widest py-4.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 active:scale-[0.99]"
          >
            Send Message
          </button>

        </form>
      </div>

    </main>
  )
}

export default Contact