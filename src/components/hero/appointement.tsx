'use client';

import React from 'react';
import { Phone } from 'lucide-react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animted-modal';
import { Heading } from '@/components/ui/headers';

export const Appointement: React.FC = () => {
  // -- Render
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-secondary-black text-white dark:bg-white dark:text-black flex justify-center group/modal-btn">
          <div className="gap-2 group-hover/modal-btn:translate-x-40 text-center transition duration-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
            <Phone size={16} /> Prendre RDV
          </div>
          <div className="text-white dark:text-black -translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
            <span className="animate-phone">
              <Phone size={16} />
            </span>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <Heading variant="h3">Prendre RDV</Heading>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
