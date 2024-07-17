'use client';

import React, { SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FlaskConical, MousePointerClick, Menu, X } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heading } from '@/components/ui/headers';

export const Navbar: React.FC = () => {
  // -- Variables
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // -- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path);
    router.push(path);
    setIsMenuOpen(false);
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
    <div className="mb-4 lg:mb-8 h-auto">
      <div className="lg:hidden flex justify-between items-center p-4">
        <Heading variant="h3">Brand</Heading>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} w-full h-auto lg:flex lg:items-center lg:justify-between gap-4 lg:gap-0`}
      >
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="flex flex-col lg:flex-row h-auto md:h-10">
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
        </Tabs>
        <Tabs className="w-full lg:w-auto">
          <TabsList className="flex flex-col lg:flex-row h-auto lg:h-10">
            <TabsTrigger
              value="lab"
              onClick={() => handleNavigation('/lab', 'lab')}
            >
              {isMenuOpen ? 'Lab' : <FlaskConical size={20} />}
            </TabsTrigger>
            <TabsTrigger
              value="uses"
              onClick={() => handleNavigation('/uses', 'uses')}
            >
              {isMenuOpen ? 'Uses' : <MousePointerClick size={20} />}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
