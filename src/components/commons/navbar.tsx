'use client';

import React, { SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FlaskConical, Menu, X, Mouse } from 'lucide-react';

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
      '/uses': 'uses',
      '/contact': 'contact',
      '/lab': 'lab',
    };
    const dynamicPaths = [{ pattern: /^\/projects\/.+$/, tab: 'projects' }];
    let activeTab = pathMap[pathname] || 'about';
    dynamicPaths.forEach(({ pattern, tab }) => {
      if (pattern.test(pathname)) {
        activeTab = tab;
      }
    });
    setActiveTab(activeTab);
  }, [pathname]);

  // -- Render
  return (
    <nav className="mb-4 lg:mb-8">
      <div className="lg:hidden flex justify-start items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row justify-between items-start lg:items-center w-full`}
      >
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full lg:w-auto"
        >
          <TabsList className="flex flex-col lg:flex-row h-auto">
            {['about', 'experiences', 'projects', 'contact'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                onClick={() =>
                  handleNavigation(tab === 'about' ? '/' : `/${tab}`, tab)
                }
                className="w-full lg:w-auto"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Tabs className="w-full lg:w-auto -mt-2">
          <TabsList className="flex flex-col lg:flex-row h-auto">
            <TabsTrigger
              value="lab"
              onClick={() => handleNavigation('/lab', 'lab')}
              className="w-full lg:w-auto"
            >
              <span className="lg:hidden">Lab</span>
              <FlaskConical size={20} className="hidden lg:inline" />
            </TabsTrigger>
            <TabsTrigger
              value="uses"
              onClick={() => handleNavigation('/uses', 'uses')}
              className="w-full lg:w-auto"
            >
              <span className="lg:hidden">Uses</span>
              <Mouse size={20} className="hidden lg:inline" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
};
