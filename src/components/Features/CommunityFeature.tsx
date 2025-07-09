
'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export function CommunityFeature() {
    return (
        <section className='flex flex-col gap-2 py-[22px] px-[22px] border-1 rounded-lg rounded-r-[0px] max-[945px]:rounded-r-lg rounded-l-[0px] max-[945px]:rounded-l-lg'>

            <section className='flex items-center gap-6'>

                <section className='border-1 bg-background w-[50px]! h-[50px]! flex items-center justify-center rounded-lg'>
                    <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl" />
                </section>

                <span className='font-mono antialiased text-lg'>
                    Комьюнити
                </span>

            </section>

            <span className='font-mono antialiased opacity-60'>
                Комьюнити нашего сервера собиралось много месяцев, и наконец оно идеально!
            </span>

        </section>
    )
}