import { Metadata } from 'next'

import { Container } from '~/components/commons/animation'
import { NoteTaker } from '~/components/notes/note-taker'
import { Heading } from '~/components/ui/headers'

export const metadata: Metadata = {
  title: 'Note · Ugolin Ollé',
  description: 'Page de prise de note',
}

/**
 * @function NotePage
 * @description This page is dedicated to the note taking feature
 * @exports NotePage
 */
export default function NotePage() {
  // --- Render
  return (
    <Container>
      <Heading variant="h2">Ecrit une note ici</Heading>
      <NoteTaker />
    </Container>
  )
}
