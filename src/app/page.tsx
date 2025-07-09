
'use client'

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { FeaturesParagraph } from "@/components/FeaturesParagraph"
import { Features } from "@/components/Features"
import { FaqParagraph } from "@/components/FaqParagraph"
import { FaqAccordion } from "@/components/FaqAccordion"

export default function Home() {
  return(
    <main className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <Header />
      <Hero />
      <FeaturesParagraph />
      <Features />
      <FaqParagraph />
      <FaqAccordion />
    </main>
  )
}
