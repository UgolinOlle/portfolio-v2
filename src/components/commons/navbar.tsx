'use client';

import React, { SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContactForm } from '@/components/contact/form';

export const Navbar: React.FC = () => {
  // -- Variables
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('about');

  // -- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path);
    router.push(path);
  };

  // -- Render
  return (
    <div className="w-full h-full flex flex-wrap justify-between mb-8">
      <Tabs
        defaultValue="about"
        className="w-full"
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger
            value="about"
            onClick={() => handleNavigation('/', 'about')}
          >
            À propos
          </TabsTrigger>
          <TabsTrigger
            value="experiences"
            onClick={() => handleNavigation('/experiences', 'experiences')}
          >
            Expériences
          </TabsTrigger>
          <TabsTrigger value="projects">Projets</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <TabsContent
              value="projects"
              key="projects"
              className="py-4 md:py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                Projects show here.
              </motion.div>
            </TabsContent>
          )}
          {activeTab === 'contact' && (
            <TabsContent value="contact" key="contact" className="py-4 md:py-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ContactForm />
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};
