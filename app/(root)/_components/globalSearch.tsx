import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function GlobalSearch() {
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
                <Input className='px-5 py-4 my-4' placeholder='Search panel'/>
                <div className='flex flex-col space-y-2 mt-4' >
                    <p className="font-creteRound text-2xl ">See post by categories</p>
                    <div className='flex flex-wrap gap-2'>
                        {popularCategories.map(categories => (
                            <Link href={`/categories/${categories.slug}`}>
                                <Badge variant={"secondary"} key={categories.slug}>{categories.name}</Badge>

                            </Link>
                            ))}

                    </div>
                </div>
                <div className='flex flex-col space-y-2 mt-4' >
                    <p className="font-creteRound text-2xl">Search by tags</p>
                    <div className='flex flex-wrap gap-2'>
                        {popularTags.map(tags => (
                            
                            <Badge variant={"secondary"} key={tags.slug}>{tags.name}</Badge>
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