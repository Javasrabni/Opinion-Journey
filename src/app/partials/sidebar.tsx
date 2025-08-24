'use client'

import Link from 'next/link'
import React from 'react'
import { DataArticle } from '@/lib/articles'


const Sidebar = () => {
    return (
        <div className='w-[280px] p-8 shadow-xl shrink-0 flex flex-col gap-4 relative'>
            <Link href={'/'}><h1 className='text-xl font-semibold font-[timesnewroman]'>Opinion Journey</h1></Link>
            <div className='custom-scrollbar max-h-[calc(100%-260px)] h-full overflow-y-scroll'>
                <ul className='flex flex-col gap-4'>
                    {DataArticle.map(i =>
                        <Link key={i.no} href={`/article/${i.no}-${i.title.replace(/\s+/g, '-')}`}>
                            <li>{i.title}</li>
                        </Link>
                    )}
                </ul>
            </div>
            <div className='max-w-[280px] w-full h-fit absolute left-0 px-8 bottom-8 flex flex-col gap-4 justify-center'>
                <div className='flex flex-col gap-2'>
                    <span className='flex justify-between items-center'>
                        <p className='text-base font-[newsroman]'>Tentang penulis</p>
                        <p className='text-base text-gray-400'>---</p>
                    </span>
                    <p className='text-xs text-justify'>Saya, Javas Anggaraksa Rabbani, mahasiswa Hukum di Universitas Sultan Ageng Tirtayasa. Tulisan di Opinion Journey hanyalah pandangan pribadi saya terhadap berbagai topik, bukan pernyataan resmi institusi atau pihak lain.</p>
                </div>
                <div className='flex gap-4 items-center w-full'>
                    <img src="/untirta.png" alt="untirta logo" className='w-[32px] h-[32px] grayscale opacity-80 brightness-110 contras-125 ' />
                    <p className='font-[newsroman] text-xs leading-4'>Universitas Sultan Ageng <br />Tirtayasa</p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
