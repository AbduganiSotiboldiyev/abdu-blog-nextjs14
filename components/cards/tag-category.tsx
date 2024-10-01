import { IcategoriesAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props extends IcategoriesAndTags {
    type : "tags" | "categories"
}

function TagAndCategoryCard(item: Props) {
  return (
    <div><Link
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center gap-4 justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/10'
			href={`/${item.type}/${item.slug}`}
		>
			<div className=' flex-row justify-center items-center'>
				<div className='flex justify-center items-center gap-2'>
					{item.type === 'tags' ? <Tags /> : <Layers2/>}
					<h1 className='text-2xl font-creteRound'>{item.name}</h1>
				</div>
				<div className='flex items-center'>
					<p className='mx-auto'>{item.blogs.length} posts</p>
				</div>

			</div>
		</Link></div>
  )
}

export default TagAndCategoryCard