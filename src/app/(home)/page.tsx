'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SetStateAction, useState } from 'react';

import { AboutInfo } from '@/components/about/info';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExperiencesInfo } from '@/components/experiences/info';

export default function HomePage() {
  // -- Variables
  const [activeTab, setActiveTab] = useState('about');

  // -- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  // -- Render
  return (
    <div className="w-full h-full flex flex-wrap justify-between">
      <Tabs
        defaultValue="about"
        className="w-full"
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value="about">À propos</TabsTrigger>
          <TabsTrigger value="experiences">Expériences</TabsTrigger>
          <TabsTrigger value="projects">Projets</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <TabsContent value="about" key="about" className="py-4 md:py-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AboutInfo />
              </motion.div>
            </TabsContent>
          )}
          {activeTab === 'experiences' && (
            <TabsContent
              value="experiences"
              key="experiences"
              className="py-4 md:py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ExperiencesInfo />
              </motion.div>
            </TabsContent>
          )}
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
                Contact us here.
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
