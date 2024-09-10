'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bug } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const Bugs: React.FC = () => {
  // -- Variables
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // -- Functions
  const handleScreenshot = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL('image/png');
    setScreenshot(dataURL);
  };

  const handleSubmit = async () => {
    if (!description) {
      setError('La description ne peut pas être vide.');
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/github/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Nouveau rapport de bug',
          body: `**Description:**\n${description}\n\n**Capture d'écran:**\n![screenshot](${screenshot})`,
        }),
      });

      if (response.ok) {
        toast.success('Votre rapport de bug a bien été envoyé.');
        setDescription('');
        setScreenshot(null);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      toast.error('Une erreur est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // -- Render
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full px-2 py-4 text-neutral-600/70 dark:text-neutral-400/70"
          onClick={handleScreenshot}
        >
          <Bug size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rapport de bug</DialogTitle>
          <DialogDescription>
            Si vous rencontrez un problème, merci de nous le signaler en
            remplissant le formulaire ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 px-4 flex flex-col items-start gap-5 h-[70vh]">
          {screenshot && (
            <Image
              src={screenshot}
              alt="Screenshot"
              width={200}
              height={200}
              objectFit="cover"
              className="w-full max-w-xs rounded-md shadow-md"
            />
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-md h-32 p-2 border rounded-md"
            placeholder="Décrivez le problème..."
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="self-end"
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
