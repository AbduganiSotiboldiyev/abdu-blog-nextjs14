import AuthorCard from '@/components/cards/authorCard'
import { getAuthor } from '@/service/author.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata({params} : {params : {slug: string}}) {
	const author = await getAuthor(params.slug)
	return {
		title : author.name
	}
}

async function AuthorPage({params} : {params : {slug: string}} ) {
    const author = await getAuthor(params.slug)
    
  return (
   <div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Author</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>{author.name}</p>
				</div>
			</div>
				<div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				
					<AuthorCard type={'authorDetail'} {...author} />
				
			</div>
		</div>
  )
}

export default AuthorPage