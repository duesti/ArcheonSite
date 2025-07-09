'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHome,
    faMap,
} from '@fortawesome/free-solid-svg-icons'

import { Button } from "@/components/ui/button"

import { DropDownSocials } from '@/components/Header/DropDownSocials'
import { DropDownTheme } from '@/components/Header/DropDownTheme'
import { DrawerBurger } from '@/components/Header/DrawerBurger'

export function Header() {
    return (
        <header className='max-w-4xl border-1 rounded-lg flex justify-between items-center px-[22px] py-[11px] z-20 bg-background'>
            
            <span className='font-mono antialiased text-xl font-medium'>
                ARCHEON
            </span>

            <nav className='flex gap-2.5'>

                <div className="max-[800px]:hidden flex gap-2.5">
                    <Button variant={'outline'} className='cursor-pointer' onClick={() => open('/')}>
                        <FontAwesomeIcon icon={faHome}/>
                        Главная
                    </Button>

                    <DropDownSocials />

                    <Button variant={'outline'} className='cursor-pointer' onClick={() => open('/map')}>
                        <FontAwesomeIcon icon={faMap}/>
                        Онлайн карта
                    </Button>

                </div>

                <DrawerBurger />
                <DropDownTheme />
                
            </nav>

        </header>
    )
}