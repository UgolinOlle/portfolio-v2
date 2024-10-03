import { Container } from '~/components/commons/animation';
import { Heading } from '~/components/ui/headers';

export default function Landing() {
  // -- Render
  return (
    <Container className="flex h-[90vh] w-full flex-col items-center justify-center gap-5 rounded-lg text-black sm:border">
      <Heading variant="h1" className="m-auto h-full w-full" border={false}>
        Ugolin Olle
      </Heading>
    </Container>
  );
}
