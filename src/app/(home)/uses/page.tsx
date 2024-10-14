/**
 * @file page.tsx
 * @description Page to display the tools I use
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Metadata } from 'next'

import { Container } from '~/components/commons/animation'
import { Heading } from '~/components/ui/headers'
import { UseList, UseImagesList } from '~/components/uses/list'
import { USES_APP, USES_GEAR, USES_WALLPAPER } from '~/lib/constants/uses'

/**
 * Metadata for the uses page
 * 
 * @returns {Metadata} The metadata for the uses page
 */
export const metadata: Metadata = {
  title: 'Uses · Ugolin Ollé',
  description:
    "Liste des outils que j'utilise pour travailler, apprendre et me divertir",
}

/**
 * Uses page component
 * 
 * This component is used to display the uses page.
 * 
 * @returns {React.JSX.Element} The uses page component
 */
export default function UsesPage() {
  // --- Render
  return (
    <Container className="mb-16">
      <Heading variant="h2">Mes outils</Heading>
      <p className="text-slay-700/75 dark:text-slay-300/75 my-2 w-3/4 text-lg">
        Liste de mes outils préférés que j'utilise pour travailler, apprendre et
        me divertir. J'essaie de les mettre à jour régulièrement.
      </p>
      <UseList title="Applications" items={USES_APP} />
      <UseList title="Matériel" items={USES_GEAR} />
      <UseImagesList title="Fond d'écran" items={USES_WALLPAPER} />
    </Container>
  )
}
