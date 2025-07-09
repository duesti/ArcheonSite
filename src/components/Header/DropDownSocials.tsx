
'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHashtag
} from '@fortawesome/free-solid-svg-icons'

import {
    faDiscord,
    faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'

export function DropDownSocials() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className='cursor-pointer'>
                    <FontAwesomeIcon icon={faHashtag}/>
                    Соцсети
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='center' className='bg-background'>
                <DropdownMenuItem className='cursor-pointer' onClick={() => window.open('https://discord.gg/GKBgTjb7cX', '_blank')}>
                    Дискорд
                    <DropdownMenuShortcut>
                        <FontAwesomeIcon icon={faDiscord} />
                    </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' onClick={() => window.open('https://t.me/archeon_vanilla', '_blank')}>
                    Телеграмм
                    <DropdownMenuShortcut>
                        <FontAwesomeIcon icon={faTelegramPlane} />
                    </DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}