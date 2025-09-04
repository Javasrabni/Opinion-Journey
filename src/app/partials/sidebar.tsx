"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { DataArticle } from '@/lib/articles'
import { ArrowLeft, ArrowRight, ListMinus, Info } from 'lucide-react';


const Sidebar = () => {
    const pathname = usePathname()

    // Side bar 
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const EventKeyPress = () => {
        setSidebarToggle(prev => !prev)
    }
    useEffect(() => {
        const HandleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                EventKeyPress()
            }
        }

        window.addEventListener('keydown', HandleKeyPress)
        return () => {
            window.removeEventListener('keydown', HandleKeyPress)
        }
    }, [sidebarToggle])
    // /////////////////////////////////

    // Data article 

    return (
        <div className={` shadow-xl shrink-0 flex flex-col gap-4 relative  ${sidebarToggle ? ' w-[64px] py-8 px-2 items-center' : ' w-[280px] p-8'}`}>
            <div className={`flex justify-between items-center`}>
                {sidebarToggle ? (
                    <Link href={'/'}>
                        <Image
                            src="/logoOJ.png"
                            alt="Logo Opinion Journey"
                            width={32}
                            height={32}
                        />
                    </Link>
                ) : (
                    <Link href={'/'}><h1 className='text-xl font-semibold font-[timesnewroman]'>Opinion Journey</h1></Link>
                )}
                <span className='absolute right-[-2rem] w-8 h-8 bg-gray-100 flex items-center justify-center rounded-r-sm cursor-pointer' onClick={() => setSidebarToggle(prev => !prev)}>
                    {sidebarToggle ? (
                        <ArrowRight className='w-4 h-4' />
                    ) : (
                        <ArrowLeft className='w-4 h-4' />
                    )}
                </span>
            </div>
            <div className={` custom-scrollbar max-h-[calc(100%-260px)] h-full overflow-y-scroll`}>
                <ul className={`flex flex-col gap-4`}>
                    {sidebarToggle ? (
                        <div className='w-8 h-8 hover:bg-gray-100 cursor-pointer flex items-center justify-center rounded-lg' onClick={() => setSidebarToggle(prev => !prev)}>
                            <ListMinus className='w-4 h-4' />
                        </div>
                    ) : (
                        <>
                            {DataArticle.map(i =>
                                <Link key={i.no} href={`/article/${i.no}-${i.title.replace(/\s+/g, '-')}`} className={`hover:bg-gray-900 hover:text-white hover:p-4 rounded-lg ${pathname.includes(`${i.no}-`) && 'bg-gray-100'}`}>
                                    <li>{i.title}</li>
                                </Link>
                            )}
                        </>
                    )}
                </ul>
            </div>
            <div className={`px-8 max-w-[280px] w-full h-fit absolute left-0 bottom-8 flex flex-col gap-4 justify-center items-center`}>
                {sidebarToggle ? (
                    <div className='w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer' onClick={() => setSidebarToggle(prev => !prev)}>
                        <Info className='w-4 h-4' />
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col gap-2'>
                            <span className='flex justify-between items-center'>
                                <p className='text-base font-[newsroman]'>Tentang penulis</p>
                                <p className='text-base text-gray-400'>---</p>
                            </span>
                            <p className='text-xs text-justify'>Saya, Javas Anggaraksa Rabbani, mahasiswa Hukum di Universitas Sultan Ageng Tirtayasa. Tulisan di Opinion Journey hanyalah pandangan pribadi saya terhadap berbagai topik, bukan pernyataan resmi institusi atau pihak lain.</p>
                        </div><div className='flex gap-4 items-center w-full'>
                            <Image
                                src={'/untirta.png'}
                                alt='Logo Untirta'
                                width={32}
                                height={32}
                                className='grayscale opacity-80 brightness-110 contras-125'
                            />
                            <p className='font-[newsroman] text-xs leading-4'>Universitas Sultan Ageng <br />Tirtayasa</p>

                        </div>
                    </>
                )
                }
            </div >
        </div >
    )
}

export default Sidebar
