
'use client'

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@/components/ui/accordion'

export function FaqAccordion() {
    return (
        <section className='border-1 w-full py-[22px]! px-[44px]! rounded-lg'>
            <Accordion type={'single'} collapsible
                className='w-full'
            >
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='cursor-pointer'>
                        Как попасть на сервер?
                    </AccordionTrigger>
                    <AccordionContent>
                        Стоит просто нажать на кнопку "Начать новую игру" на главной секции, после чего написать заявку в нашем дискорд канале
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                    <AccordionTrigger className='cursor-pointer'>
                        С какой версии можно играть?
                    </AccordionTrigger>
                    <AccordionContent>
                        1.21
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                    <AccordionTrigger className='cursor-pointer'>
                        Есть ли гриферы?
                    </AccordionTrigger>
                    <AccordionContent>
                        К большому сожалению, от них не избавиться полностью. Но мы сразу убираем игрока после малейшей попытки гриферства
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}