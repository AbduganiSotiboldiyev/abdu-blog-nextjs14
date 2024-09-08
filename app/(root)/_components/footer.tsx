"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2 } from 'lucide-react'
import React, { useState } from 'react'

function Footer() {
  const [active,setActive] = useState(false)
  return (
    <footer className='container mx-auto flex-center flex-col py-24 max-w-2xl space-y-12'>  
      <h1 className='text-5xl font-creteRound text-center'>
        Get latest post delivered right to you
      </h1>
      <div className='grid grid-cols-3 max-md:grid-cols-1 md:gap-4 w-full'> 
        <Input 
          placeholder='Enter your email'
          className='w-full col-span-2'
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
         />
         <Button size={"lg"}  variant={active ? "default" :  "outline"}> 
          <User2 className='w-4 h-4 me-2'></User2>
          <span>Join today </span>
         </Button>

      </div>

    </footer>
  )
}

export default Footer