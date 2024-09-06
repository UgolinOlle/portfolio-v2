'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { toast } from 'sonner';

import { MDXWrapper } from '@/components/commons/mdx/mdx';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface MDXContentRendererProps {
  slug: string;
}

export const ProjectsContent: React.FC<MDXContentRendererProps> = ({
  slug,
}): JSX.Element => {
  // --- Variables
  const router = useRouter();
  const [mdxExists, setMdxExists] = useState<boolean>(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  // --- Functions
  useEffect(() => {
    const checkMdxFile = async (slug: string) => {
      const res = await fetch(`/api/mdx?slug=${slug}&category=projects`);
      const data = await res.json();

      if (!data.exists) {
        toast.error('Aucune information disponible pour le moment.');
        setMdxExists(false);
      } else {
        setMdxExists(true);
      }
    };

    checkMdxFile(slug);
  }, [slug]);

  const loadMdxComponent = (filename: string) =>
    dynamic(() => import(`../../../contents/projects/${filename}.mdx`), {
      ssr: false,
    });

  const MdxContent = mdxExists ? loadMdxComponent(slug) : null;

  // --- Render
  return (
    <div className="relative w-full flex flex-col gap-3 items-start">
      <Button variant="outline" onClick={() => router.push('/projects')}>
        <ArrowLeft size={16} className="mr-2" />
        Retour
      </Button>
      {mdxExists && MdxContent ? (
        <MDXWrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="my-5"
          >
            <MdxContent />
          </motion.div>
        </MDXWrapper>
      ) : (
        <p>Chargement ou contenu indisponible.</p>
      )}
    </div>
  );
};
