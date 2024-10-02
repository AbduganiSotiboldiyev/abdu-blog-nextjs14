import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tags } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import {format} from "date-fns"

interface Props extends IBlog {
	isVertical?: boolean
	isHorizontal? : boolean
	type : "home"  | "default"
}

function BlogCard(blog: Props) {
	
	
	return (
		<div className={cn(
					'grid gap-4 group ',
					blog.isVertical ? 'grid-cols-1' : 'flex',
					
				)}>
			{blog.isVertical ? 
			<div>
				<Link
				href={`/blogs/${blog.slug}`}
				
			>
				<div className='relative bg-secondary rounded-md'>
					{blog.type === "home" ? 
						<Image
							width={900}
							height={335}
							src={blog.blogImg.url}
							alt={blog.title}
							className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
						/> :
						<Image
							width={650}
							height={335}
							src={blog.blogImg.url}
							alt={blog.title}
							className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
						/> 
					}
				</div>
				</Link>
				<div className='flex flex-col space-y-4'>
					<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
					{/* Time info */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{format(new Date(blog.createdAt), "MMM dd,yyyy")}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>{getReadingTime(blog.info.html)} minuts to read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
						{blog.title}
					</h2>
					<p className='text-muted-foreground line-clamp-3'>{blog.description}</p>

					</Link>
			
					{/* Author */}
				
						<div className='flex items-center gap-4'>
							<Link href={`/authors/${blog.author.slug}`}>
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

							</Link>
							<Dot />	
							<div className='flex items-center gap-2'>
								<Link href={`/tags/${blog.tag.slug}`}>
									<Badge variant={'secondary'} role='button'><Tags className='w-4 h-4 '/>{blog.tag.name}</Badge>
								</Link>
								<Link href={`/categories/${blog.category.slug}`}>
									<Badge variant={'secondary'} role='button'><Layers2 className='w-4 h-4 '/>{blog.category.name}</Badge>
								</Link>
							
							</div>
						</div>

					
				</div>
			</div> :
			 <div>
				<div className='flex flex-col space-y-4 mb-10 max-h-60'>
					<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
					{/* Time info */}
					{/* Author */}
				
						<div className='flex items-center gap-4'>
							<Link href={`/authors/${blog.author.slug}`}>
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

							</Link>
							<Dot />	
							<div className='flex items-center gap-2'>
								<Link href={`/tags/${blog.tag.slug}`}>
									<Badge variant={'secondary'} role='button'><Tags className='w-4 h-4 '/>{blog.tag.name}</Badge>
								</Link>
								<Link href={`/categories/${blog.category.slug}`}>
									<Badge variant={'secondary'} role='button'><Layers2 className='w-4 h-4 '/>{blog.category.name}</Badge>
								</Link>
								
							</div>
						</div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{format(new Date(blog.createdAt), "MMM dd,yyyy")}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>{getReadingTime(blog.info.html)} minuts to read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors max-h-50 mb-10'>
						{blog.title}
					</h2>
					<p className='text-muted-foreground line-clamp-3 '>{blog.description}</p>

					</Link>

				</div>
					<Link
						href={`/blogs/${blog.slug}`}
						>
						<div className='relative bg-secondary rounded-md '>
							<Image
								width={650}
								height={335}
								src={blog.blogImg.url}
								alt={blog.title}
								className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
							/>
						</div>
					</Link>
			</div>}
		</div>
	)
}

export default BlogCard