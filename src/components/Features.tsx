
'use client'

import { CommunityFeature } from '@/components/Features/CommunityFeature'
import { UpTimeFeature } from '@/components/Features/UpTimeFeature'
import { VanillaFeature } from '@/components/Features/VanillaFeature'

export function Features() {
    return (
        <section className='grid grid-cols-3 max-[945px]:grid-cols-1 max-[945px]:gap-6'>
            
            <UpTimeFeature />
            <CommunityFeature />
            <VanillaFeature />

        </section>
    )
}