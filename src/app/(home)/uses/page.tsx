import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import { UseList } from '@/components/uses/list';
import { USES_APP, USES_GEAR } from '@/lib/constants/uses';

export default function UsesPage() {
  // -- Render
  return (
    <AnimatedContainer custom={0} className="my-16">
      <Heading variant="h1">Mes outils</Heading>
      <p className="text-lg text-slay-700/75 dark:text-slay-300/75 text-justify w-3/4">
        Liste de mes outils préférés que j'utilise pour travailler, apprendre et
        me divertir. J'essaie de les mettre à jour régulièrement.
      </p>
      <UseList title="Applications" items={USES_APP} />
      <UseList title="Matériel" items={USES_GEAR} />
    </AnimatedContainer>
  );
}
