
import { getReadingTime } from '@/lib/utils'
import { getDetailedPage } from '@/service/blog.service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { ArrowUpRight, CalendarDays, Clock,  Minus} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ShareButtons from '../../_components/share-buttons'


export async function generateMetadata({params} : {params : {slug: string}}) {
	const blog = await getDetailedPage(params.slug)
	return {
		title : blog.title
	}
}


async function SlugPage({params} : {params : {slug: string}}) {
  const blog = await getDetailedPage(params.slug)
  
  
  return (
    
        <div className='pt-[15vh] max-w-5xl mx-auto'>
          <h2 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>
            {blog.title}
          </h2>
          <div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
              <Image
                src={blog.author.authorImg.url}
                alt='author'
                width={30}
                height={30}
                className='object-cover rounded-sm'
              />
              <p>by {blog.author.name}</p>
            </div>
            <Minus />
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5' />
              <p>{getReadingTime(blog.info.html)} min read</p>
            </div>
            <Minus />
            <div className='flex items-center gap-2'>
              <CalendarDays className='w-5 h-5' />
              <p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
            </div>
          </div>
          <Image
              src={blog.blogImg.url}
              alt='alt'
              width={`1120`}
              height={`595`}
              className='mt-4 rounded-md'
            />
            <div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
              <div className='flex flex-col space-y-3'>
                <ShareButtons/>
              </div>
              <div className='flex-1 prose dark:prose-invert'>
                {parse(blog.info.html)}
              </div>
            </div>
            	<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.authorImg.url}
					alt='author'
					width='155'
					height='155'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{blog.author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog.author.bio}
					</p>
					<Link
						href={`/authors/${blog.author.slug}`}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>See all posts by this author</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
      	</div>
   
  )
}

export default SlugPage