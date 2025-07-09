
'use client'

import { Button } from '@/components/ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBurger,
    faHome,
    faMap
} from '@fortawesome/free-solid-svg-icons'

import { 
    DrawerTrigger,
    DrawerContent,
    Drawer,
    DrawerTitle
} from '@/components/ui/drawer'

import {
    faDiscord, faTelegram 
} from '@fortawesome/free-brands-svg-icons'

export function DrawerBurger() {
    return (
        <Drawer>
            <DrawerTrigger asChild className='hidden max-[800px]:block'>
                <Button variant={'outline'} className='cursor-pointer'>
                    <FontAwesomeIcon icon={faBurger} />
                </Button>
            </DrawerTrigger>

            <DrawerContent className='py-[11px]! px-[22px]! flex flex-col items-center gap-3.5'>
                <DrawerTitle className='hidden'>
                    Навигация
                </DrawerTitle>

                <Button variant={'outline'} className='cursor-pointer w-[320px] mt-[11px]' onClick={() => window.open('/')}>
                    <FontAwesomeIcon icon={faHome}/>
                    Главная
                </Button>

                <Button variant={'outline'} className='cursor-pointer w-[320px]' onClick={() => window.open('https://discord.gg/GKBgTjb7cX', '_blank')}>
                    <FontAwesomeIcon icon={faDiscord}/>
                    Дискорд
                </Button>

                <Button variant={'outline'} className='cursor-pointer w-[320px]' onClick={() => window.open('https://t.me/archeon_vanilla', '_blank')}>
                    <FontAwesomeIcon icon={faTelegram}/>
                    Телеграмм
                </Button>

                <Button variant={'outline'} className='cursor-pointer w-[320px] mb-[22px]' onClick={() => window.open('/map', '_blank')}>
                    <FontAwesomeIcon icon={faMap}/>
                    Онлайн карта
                </Button>
            </DrawerContent>
        </Drawer>
    )
}