import { Heading } from '~/components/ui/headers'
import { Container } from '~/components/commons/animation'
import { ProjectsInfo } from '~/components/projects/info'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projets · Ugolin Ollé',
  description: "Découvrez les projets sur lesquels j'ai travaillé.",
}

export default function ProjectsPage() {
  // -- Rendu
  return (
    <Container className="mb-28 flex flex-col gap-10">
      <Heading variant="h2">Projects</Heading>
      <ProjectsInfo />
    </Container>
  )
}
