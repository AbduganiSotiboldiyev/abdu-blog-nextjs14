import ChildProps from '@/types'
import React from 'react'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import { Toaster } from 'sonner'

function Layout({children} : ChildProps) {
  return (
    <main>
      <Navbar/>
      <div className="container  mx-auto ">
        {children}
        <Toaster position='top-center'/>
      </div>
      <Footer/>
    </main>
  )
}

export default Layout