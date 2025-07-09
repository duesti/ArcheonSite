'use client'

import { Button } from '@/components/ui/button'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
        weight: ['900', '400'],
        subsets: ['cyrillic', 'latin']
    })

export function Hero() {

    const discordLink = process.env.discordLink

    return (
        <section className='flex items-center justify-center flex-col gap-6 sm:gap-8 py-8 sm:py-[22px]! px-4 sm:px-[22px]! border-1 rounded-lg min-h-[320px] sm:min-h-140 w-full mx-auto'>

            <section className={unbounded.className}>
                <section className='flex flex-col items-center'>
                    <span className='text-2xl sm:text-3xl md:text-4xl antialiased opacity-60'>Ванильный</span>
                    <span className='text-4xl sm:text-5xl md:text-6xl uppercase antialiased font-black'>Minecraft</span>
                    <span className='text-2xl sm:text-3xl md:text-4xl antialiased opacity-60'>Сервер</span>
                </section>
            </section>

            <section className='max-w-full sm:max-w-xl md:max-w-2xl text-center px-2 sm:px-4'>
                <span className='font-mono text-sm sm:text-base antialiased opacity-60'>
                    Команда нашего проекта нацелена на создание приветливой атмосферы на сервере, чтобы каждый ощущал себя комфортно. Мы прилагаем все усилия для обеспечения дружелюбного взаимодействия между участниками. Мы ждем именно тебя!
                </span>
            </section>

            <section>
                <Button
                    size={'lg'}
                    className="cursor-pointer text-sm sm:text-base"
                    onClick={() => window.open('https://discord.gg/GKBgTjb7cX', '_blank')}
                >
                    Начать новую историю
                </Button>
            </section>
            
        </section>
    )
}