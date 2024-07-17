'use client';

import React from 'react';
import { Phone } from 'lucide-react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animted-modal';

export const Appointement: React.FC = () => {
  // -- Render
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <div className="flex items-center gap-2 group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            <Phone size={16} /> Prendre RDV
          </div>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <span className="animate-phone">
              <Phone size={16} />
            </span>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent></ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
