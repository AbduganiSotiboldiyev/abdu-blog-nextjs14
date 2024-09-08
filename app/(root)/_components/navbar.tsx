"use client"

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import GlobalSearch from './globalSearch'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
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
              <Link key={item.route} href={item.route} className={cn('hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors', pathname === item.route && "text-blue-400")} >{item.name}</Link>
            ))}
        </div>
        {/* Search */}
        <div className='flex items-center gap-1' >
              <GlobalSearch/>
            <ModeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Navbar