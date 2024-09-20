import { getAuthor } from '@/service/author.service'
import { IAuthor } from '@/types'
// import { Props } from 'html-react-parser/lib/attributes-to-props'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogCard from './blog'
import { getBlogs } from '@/service/blog.service'
interface Props extends IAuthor {
  type : "about" | "authorDetail"
}
async function AuthorCard(author : Props) {
  
  const blogs = await getBlogs()
  
  return (
    <div className='flex flex-col space-y-2  text-center'>
      {author.type === "about" ? 
      <>
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
      </> : 
      <>
        <div className='grid grid-cols-3 gap-4 justify-between'>
          <div className=' col-span-1'>
            <Image width={700} height={700} src={author.authorImg.url} alt={author.name} className='rounded-md grayscale'/>
          </div>
          <div className='col-span-2'>
            <h2 className='text-5xl font-creteRound mb-6'>{author.name}</h2>
            <p className='text-muted-foreground font-creteRound'>{author.bio}</p>
          </div>
        </div>
        <div className='pt-10 '>
            <h2 className='text-center text-5xl font-creteRound'> Blogs by {author.name} </h2>
           <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24' >
            {author.blogs.map(blog => (
              <BlogCard key={blog.id} {...blog}  type='default' isVertical/>
            ))}
        </div>
        </div>
      </>
      
    }
    </div>
  )
}

export default AuthorCard