'use client';

import React from 'react';
import { Paperclip } from 'lucide-react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animted-modal';
import { Heading } from '@/components/ui/headers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export const Resume: React.FC = () => {
  // -- Render
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 flex justify-center group/modal-btn">
          <div className="gap-2 group-hover/modal-btn:translate-x-40 text-center transition duration-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
            <Paperclip size={16} /> Mon CV
          </div>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
            <span className="animate-phone">
              <Paperclip size={16} />
            </span>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="flex items-start gap-5">
            <Heading variant="h3">Mon CV</Heading>
            <Tabs>
              <TabsList className="flex flex-col lg:flex-row h-auto">
                <TabsTrigger value="ats">ATS</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
              <TabsContent value="ats" className="my-5">
                <Heading variant="h4">ATS</Heading>
              </TabsContent>
              <TabsContent value="custom" className="my-5">
                <Heading variant="h4">Custom</Heading>
              </TabsContent>
            </Tabs>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
