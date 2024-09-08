import ChildProps from '@/types'
import React from 'react'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({children} : ChildProps) {
  return (
    <main>
      <Navbar/>
      <div className="container  mx-auto ">
        {children}
      </div>
      <Footer/>
    </main>
  )
}

export default Layout