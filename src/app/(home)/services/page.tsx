import { Metadata } from 'next'

import { Skills } from '@/components/about/skills'
import { AnimatedContainer } from '@/components/commons/animation'
import { ServiceCard } from '@/components/services/card'
import { SERVICES } from '@/lib/constants/service'

// --- Metadata
export const metadata: Metadata = {
  title: 'Services | Ugolin Olle',
  description: 'Les services que je propose',
}

export default function ServicesPage() {
  // --- Render
  return (
    <AnimatedContainer custom={0}>
      <AnimatedContainer
        custom={1}
        className="my-16 grid grid-cols-1 gap-10 md:grid-cols-2"
      >
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </AnimatedContainer>
      <Skills />
    </AnimatedContainer>
  )
}
