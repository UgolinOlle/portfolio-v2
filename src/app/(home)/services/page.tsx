import { Metadata } from 'next'

import { Skills } from '~/components/about/skills'
import { Box, Container } from '~/components/commons/animation'
import { ServiceCard } from '~/components/services/card'
import { Heading } from '~/components/ui/headers'
import { SERVICES } from '~/lib/constants/service'

// --- Metadata
export const metadata: Metadata = {
  title: 'Services | Ugolin Olle',
  description: 'Les services que je propose',
}

export default function ServicesPage() {
  // --- Render
  return (
    <Container className="my-16">
      <Heading variant="h2">Services</Heading>
      <Box className="my-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Box>
      <Skills />
    </Container>
  )
}
