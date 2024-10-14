/**
 * @file navbar.tsx
 * @description Navbar component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import React, { SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Mouse } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

/**
 * @name Navbar
 * @description Navbar component
 * @returns {React.JSX.Element} The navbar component
 */
export const Navbar: React.FC = () => {
  // --- Variables
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path);
    if (path.startsWith('http')) window.open(path, '_blank');
    else router.push(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      '/': 'À propos',
      '/services': 'Services',
      '/projects': 'Projets',
      'https://cal.com/ugolin-olle': 'Contact',
      '/uses': 'Uses',
    };
    const dynamicPaths = [{ pattern: /^\/projects\/.+$/, tab: 'Projets' }];
    let activeTab = pathMap[pathname] || 'about';
    dynamicPaths.forEach(({ pattern, tab }) => {
      if (pattern.test(pathname)) {
        activeTab = tab;
      }
    });

    setActiveTab(activeTab);
  }, [pathname]);

  // --- Render
  return (
    <nav className="relative mb-8">
      <div className="flex items-center justify-start lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={28} />}</button>
      </div>

      {/* --- blur effect ----------------------------------------------------------------------------------------- */}
      <div className={`w-full flex-col items-start justify-between lg:flex lg:flex-row lg:items-center`}>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full lg:w-auto">
          <TabsList className="flex h-auto flex-col lg:flex-grow lg:flex-row lg:justify-start">
            {[
              { title: 'À propos', path: '/' },
              { title: 'Services', path: '/services' },
              { title: 'Projets', path: '/projects' },
              { title: 'Contact', path: 'https://cal.com/ugolin-olle' },
            ].map((tab) => (
              <TabsTrigger
                key={tab.title}
                value={tab.title}
                onClick={() => handleNavigation(tab.path, tab.title)}
                className="w-full cursor-none lg:w-auto"
              >
                {tab.title.charAt(0).toUpperCase() + tab.title.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full lg:w-auto">
          <TabsList className="flex h-auto flex-col lg:ml-auto lg:flex-row lg:justify-end">
            <TabsTrigger
              value="Uses"
              onClick={() => handleNavigation('/uses', 'Uses')}
              className="flex w-full cursor-none items-center lg:w-auto"
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
