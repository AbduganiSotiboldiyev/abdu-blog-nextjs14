import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (  
    <div className=" h-[10vh] backdrop-blur-sm  border-b fixed z-40 inset-0 bg-background">
      <div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between '>
        {/* Logo */}
        <Link href={"/"}> 
          <h1 className='font-creteRound text-2xl md:text-4xl '>AbduBlogs </h1>
        </Link> 
        {/* Navlinks */}
        <div className='gap-2 hidden md:flex'>
            {navLinks.map(item => (
              <Link key={item.route} href={item.route} className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors' >{item.name}</Link>
            ))}
        </div>
        {/* Search */}
        <div className='flex items-center gap-1' >
          <div className='flex gap-1 items-center hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors'>
            <span className='hidden md:flex'>Search</span>
            <Search className='w-4 h-4'/>
          </div>
        </div>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar