"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { getSearchPanel } from '@/service/blog.service'
import { IBlog } from '@/types'
import { Loader2, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import {debounce} from "lodash"
import SearchCard from '@/components/cards/searchCard'
import { Separator } from '@radix-ui/react-separator'


function GlobalSearch() {
    const [isLoading,setIsLoading] = useState(false)
    const [blogs, setBlogs] = useState<IBlog[]>([])

    const handleSearch =async (e : ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.toLowerCase()
        if(text && text.length > 2) {
            setIsLoading(true)
            const data =  await getSearchPanel(text)
            setBlogs(data)
            setIsLoading(false)
        }else{
            setIsLoading(false)
            setBlogs([])
        }
    }
    const debounceHandler = debounce(handleSearch, 500)
  return (
    <Drawer>
        <DrawerTrigger>
            <div className='flex gap-1 items-center hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors'>
                <span className='hidden md:flex'>Search</span>
                <Search className='w-4 h-4'/>
            </div></DrawerTrigger>
        <DrawerContent>
            <DrawerHeader  className='container mx-auto max-w-8xl py-12 '>
                <DrawerTitle className='mx-auto '>Search</DrawerTitle>
                <Input className='px-5 py-4 my-4' placeholder='Search panel' onChange={debounceHandler}/>
                {isLoading ? <Loader2 className='animate-spin mt-4 mx-auto'/>: null}
                {blogs.length ? (
						<div className='text-2xl font-creteRound mt-8'>
							{blogs.length} Results found.
						</div>
					) : null}
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2'>
						{blogs &&
							blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
                    {blogs.length ? <Separator className='mt-3' /> : null}

                <div className='flex flex-col space-y-2 mt-4' >
                    <div className='flex gap-2 items-center '>
                        <p className="font-creteRound text-3xl ">See post by categories</p>
                        <Minus/>
                        <Link href={`/categories`} >
                            <DrawerClose>
                                <p className='text-blue-600 font-creteRound text-2xl underline '>See all </p> 
                            </DrawerClose>
                        </Link>

                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {popularCategories.map(categories => (
                            <Link href={`/categories/${categories.slug}`}>
                                <DrawerClose>
                                    <Badge variant={"secondary"} key={categories.slug}>
                                            {categories.name.length ? categories.name : null}
                                    </Badge>
                                </DrawerClose>

                            </Link>
                            ))}

                    </div>
                </div>
                <div className='flex flex-col space-y-2 mt-4' >
                    <div className='flex gap-2 items-center '>
                        <p className="font-creteRound text-2xl">Search by tags</p>
                        <Minus/>
                        <Link href={`/tags`} >
                            <DrawerClose>
                                <p className='text-blue-600 font-creteRound text-2xl underline '>See all </p> 
                            </DrawerClose>
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {popularTags.map(tags => (
                            
                            <Link href={`/tags/${tags.slug}`}>
                                <DrawerClose>
                                    <Badge variant={"secondary"} key={tags.slug}>
                                            {tags.name.length ?tags.name : null}
                                    </Badge>
                                </DrawerClose>
                                </Link>

                            ))}

                    </div>
                </div>
            </DrawerHeader>
            <DrawerFooter>
            
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>

  )
}

export default GlobalSearch