"use client"
import { Service } from '@/service'
import React, { useEffect, useState } from 'react'

function Clientpage() {
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        Service.getPosts().then(response => setData(response)).finally(() => setIsLoading(false))
    }, [])

  return (
    <div>
        {isLoading && "Loading ..."}
        <h1 className='font-mono text-4xl py-6'>Client</h1>
        {data && data.map(item => (<p key={item.id}>{item.title}</p>))}
    </div>
  )
}

export default Clientpage