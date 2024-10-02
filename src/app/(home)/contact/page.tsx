import React from 'react'
import { Metadata } from 'next'

import { Box, Container } from '~/components/commons/animation'
import { Heading } from '~/components/ui/headers'
import { ContactForm } from '~/components/contact/form'

export const metadata: Metadata = {
  title: 'Contact · Ugolin Ollé',
  description: 'Contactez-moi pour un projet ou un audit gratuit.',
}

/**
 * @function ContactPage
 * @description This page is dedicated to the contact form
 * @exports ContactPage
 */
export default function ContactPage() {
  // -- Render
  return (
    <Container>
      <Box className="m-auto w-full lg:w-1/2">
        <Heading variant="h2" border={false} className="mb-6">
          Un projet ? Une question ? <br />
          On en discute !
        </Heading>
        <ContactForm />
      </Box>
    </Container>
  )
}
