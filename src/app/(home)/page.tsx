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
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experiences">Experiences</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <TabsContent value="about" key="about" className="md:py-8">
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
          {activeTab === 'skills' && (
            <TabsContent value="skills" key="skills" className="md:py-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                Skills show here.
              </motion.div>
            </TabsContent>
          )}
          {activeTab === 'experiences' && (
            <TabsContent
              value="experiences"
              key="experiences"
              className="md:py-8"
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
            <TabsContent value="projects" key="projects" className="md:py-8">
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
            <TabsContent value="contact" key="contact" className="md:py-8">
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
