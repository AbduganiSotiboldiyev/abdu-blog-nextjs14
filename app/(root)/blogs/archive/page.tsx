import { Archive, Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ArchivePage() {
  return (
        <div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
                <p className="text-gray-500 text-2xl font-creteRound mb-5"> Showing post from</p>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Archive</span>
				</h2>
      		</div>
      		<div className='flex justify-center gap-1 items-center mt-4'>
				<Home className='w-4 h-4' />
				<Link
					href={'/'}
					className='opacity-90 hover:underline hover:opacity-100'
				>
					Home
				</Link>
				<Dot />
				<p className='text-muted-foreground'>Blogs</p>
                <Dot />
				<p className='text-muted-foreground'>Archive</p>
			</div>
            <div className='container py-24 flex flex-col '>
                <div className='relative'>
					<span className='text-5xl font-creteRound relative z-20'>2023</span>
					<Archive className='absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
				</div>
                <div className='flex justify-start  space-y-2 mt-8 item'>
                    <p>5 Dec</p>
                    <Dot/>
                    <p> The AGI hype trainis running out of steam</p>
                </div>
                 <div className='flex justify-start '>
                    <p>5 Dec</p>
                    <Dot/>
                    <p> The AGI hype trainis running out of steam</p>
                </div>

            </div>
        </div>
  )
}

export default ArchivePage