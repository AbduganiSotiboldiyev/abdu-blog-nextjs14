import { Service } from '@/service'
import React from 'react'

async function Serverpage() {

  const data = await Service.getPosts()
  return (
    <div>
      <h1 className='font-mono text-4xl py-6'>Serverpage</h1>
      {data && data.map(item => (<p key={item.id}>{item.title}</p>))}

    </div>
  )
}

export default Serverpage