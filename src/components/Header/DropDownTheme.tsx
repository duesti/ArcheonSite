'use client'

import { useState, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons'

import { useTheme } from 'next-themes'

export function DropDownTheme() {
    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const [ currentIcon, setCurrentIcon ] = useState(faSun)
    
    useEffect(() => {
        setMounted(true)
        setCurrentIcon(theme === 'dark' ? faMoon : faSun)
    }, [theme])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className='cursor-pointer'>
                    <FontAwesomeIcon icon={mounted ? currentIcon : faSun}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='bg-background'>
                <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => setTheme('dark')}
                >
                    Темная
                </DropdownMenuItem>
                <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => setTheme('light')}
                >
                    Светлая
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
