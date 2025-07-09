
'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons"

export function FeaturesParagraph() {
    return (
        <section className='flex gap-2 items-center border-1 rounded-lg px-[22px]! py-[11px]!'>
            Но почему именно мы?
            <FontAwesomeIcon icon={faChartSimple} />
        </section>
    )
}