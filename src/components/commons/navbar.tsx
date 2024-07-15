'use client';

import React, { SetStateAction, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FlaskConical, MousePointerClick } from 'lucide-react';

export const Navbar: React.FC = () => {
  // -- Variables
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('about');

  // -- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path);
    router.push(path);
  };

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      '/': 'about',
      '/experiences': 'experiences',
      '/projects': 'projects',
      '/contact': 'contact',
      '/lab': 'lab',
    };
    setActiveTab(pathMap[pathname] || 'about');
  }, [pathname]);

  // -- Render
  return (
    <div className="hidden lg:flex w-full h-full items-center justify-between mb-8">
      <Tabs
        value={activeTab}
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
          <TabsTrigger
            value="projects"
            onClick={() => handleNavigation('/projects', 'projects')}
          >
            Projets
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            onClick={() => handleNavigation('/contact', 'contact')}
          >
            Contact
          </TabsTrigger>
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
        </AnimatePresence>
      </Tabs>
      <Tabs className="1/3">
        <TabsList>
          <TabsTrigger
            value="lab"
            onClick={() => handleNavigation('/lab', 'lab')}
          >
            <FlaskConical size={20} />
          </TabsTrigger>
          <TabsTrigger
            value="uses"
            onClick={() => handleNavigation('/uses', 'uses')}
          >
            <MousePointerClick size={20} />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
