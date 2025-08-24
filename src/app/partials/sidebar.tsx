'use client'

import Link from 'next/link'
import React from 'react'
import { DataArticle } from '@/lib/articles'

const Sidebar = () => {
    return (
        <div className='w-[280px] p-8 shadow-xl shrink-0 flex flex-col gap-4'>
            <Link href={'/'}><h1 className='text-xl font-semibold font-[timesnewroman]'>Opinion Journey</h1></Link>
            <div>
                <ul className='flex flex-col gap-4'>
                    {DataArticle.map(i =>
                        <Link key={i.no} href={`/article/${i.no}-${i.title.replace(/\s+/g, '-')}`}>
                            <li>{i.title}</li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
