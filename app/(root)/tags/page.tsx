import TagAndCategoryCard from '@/components/cards/tag-category'
import { getTags } from '@/service/tag.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
	title: 'All tags',
}

async function TagsPage() {
    const tags = await getTags()
    console.log(tags)
  return (
     <div>
        <div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>All tags</span>
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
					<p className='text-muted-foreground'>tags</p>
				</div>
			</div>
            <div className='grid grid-cols-4 max-md:grid-cols-1 gap-x-4 mt-24'>
				{tags.map(item => (
					<TagAndCategoryCard key={item.slug} {...item}  type='tags' />
				))}
			</div>
    </div>
  )
}

export default TagsPage