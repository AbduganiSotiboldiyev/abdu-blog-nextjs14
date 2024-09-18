import { getAuthor } from '@/service/author.service'
import { IAuthor } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AuthorCard(author : Props) {
  
  return (
    <div className='flex flex-col space-y-2 w-52 text-center'>
        <div className='w-full h-52 relative' >
          <Link href={`/authors/${author.slug}`}>
            <Image src={author.authorImg.url} alt={author.name} fill className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'></Image>
          </Link>
        </div>
        <h2 className='text-2xl font-creteRound'>
            {author.name}
        </h2>
        <p className='text-muted-foreground '>
            <span className='font-bold text-white '>4</span> Published posts
        </p>
    </div>
  )
}

export default AuthorCard