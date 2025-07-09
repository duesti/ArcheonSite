'use client'

import {
  Button
} from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [num, setNum] = useState(0)

  return (
    <main className='flex justify-center h-screen items-center flex-col gap-5'>
      <p className='font-mono text-lg'>
        {num}
      </p>

      <Button
        variant={'outline'}
        size={'sm'}
        className='cursor-pointer'
        onClick={() => setNum(num + 1)}
      >
        Click me
      </Button>
    </main>
  )
}
