
'use client'

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

export default function CounterPage() {

    const [count, setCount] = useState(0)

    return(
        <main className="items-center h-96 w-56 bg-card px-10 py-10 rounded-lg">
            <section className='flex items-center flex-col gap-20 h-screen'>

                <p>{count}</p>
                <Button variant={'outline'}
                onClick={() => setCount(count + 1)}
                className="rounded-full h-48 w-48 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faMousePointer} />
                    Click me!
                </Button>

            </section>
        </main>
    )
}