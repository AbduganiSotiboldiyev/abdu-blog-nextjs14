"use client"

import React from 'react'
import { useEffect } from 'react'

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
     useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
     }, [error])
     
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/3 bg-slate-800 p-8 rounded-md'>
            <h1 className='font-mono text-3xl'>Something went wrong!</h1>
             <button
                  onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
            >
                Try again
            </button>
        </div>    
    </div>
  )
}

export default Error