
'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faServer } from '@fortawesome/free-solid-svg-icons'

export function UpTimeFeature   () {
    return (
        <section className='flex flex-col gap-2 py-[22px] px-[22px] border-1 rounded-lg rounded-r-[0px] max-[945px]:rounded-r-lg'>

            <section className='flex items-center gap-6'>

                <section className='border-1 bg-background w-[50px]! h-[50px]! flex items-center justify-center rounded-lg'>
                    <FontAwesomeIcon icon={faServer} className="text-2xl" />
                </section>

                <span className='font-mono antialiased text-lg'>
                    Постоянный ап-тайм
                </span>

            </section>

            <span className='font-mono antialiased opacity-60'>
                Мы усиленно следим за стабильностью игрового сервера
            </span>

        </section>
    )
}