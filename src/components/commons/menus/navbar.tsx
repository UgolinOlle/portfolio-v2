'use client';

import React, { SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Mouse, BriefcaseBusiness, NotebookPen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value);
  };

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path);
    if (path.startsWith('http')) window.open(path, '_blank');
    else router.push(path);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      '/': 'À propos',
      '/services': 'Services',
      '/experiences': 'Experiences',
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

  return (
    <nav className="relative mb-8">
      <div className="flex items-center justify-start lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={28} />}</button>
      </div>

      {/* --- blur effect ----------------------------------------------------------------------------------------- */}
      <div
        className={`${
          isDropdownOpen ? 'backdrop-blur-lg' : ''
        } w-full flex-col items-start justify-between lg:flex lg:flex-row lg:items-center`}
      >
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full lg:w-auto">
          <TabsList className="flex h-auto flex-col lg:flex-grow lg:flex-row lg:justify-start">
            {/* --- About me -------------------------------------------------------------------------------------- */}
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="relative w-full lg:w-auto"
            >
              <TabsTrigger value="À propos" className="w-full cursor-none lg:w-auto">
                À propos
              </TabsTrigger>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-[450px] rounded-2xl bg-white shadow-lg lg:mt-4"
                  >
                    <ul className="flex flex-col items-start gap-3 p-2">
                      <li
                        className="flex w-full cursor-pointer items-center rounded-xl bg-neutral-100 p-2"
                        onClick={() => handleNavigation('/#me', 'Moi')}
                      >
                        <div className="relative mr-5 h-full">
                          <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 14 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 z-10 rounded-lg bg-primary"
                          />
                          <BriefcaseBusiness size={18} className="relative z-20" />
                        </div>

                        <span className="flex flex-col">
                          <p className="text-lg">Moi</p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Qui suis-je et ce que je fais ?
                          </p>
                        </span>
                      </li>
                      <li
                        className="flex w-full cursor-pointer items-center rounded-xl bg-neutral-100 p-2"
                        onClick={() => handleNavigation('/about/universe', 'Mon univers')}
                      >
                        <NotebookPen className="mr-4" size={18} />
                        <span className="flex flex-col">
                          <p className="text-lg">Mon univers</p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Découvrez mon univers et mes passions
                          </p>
                        </span>
                      </li>
                      <li
                        className="flex w-full cursor-pointer items-center rounded-xl bg-neutral-100 p-2"
                        onClick={() => handleNavigation('/about/build-in-public', 'Build in public')}
                      >
                        <Mouse className="mr-2" size={18} />
                        <span className="flex flex-col">
                          <p className="text-lg">Build in public</p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Suivez mes posts sur Twitter / LinkedIn
                          </p>
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* --- Other tabs ------------------------------------------------------------------------------------ */}
            {[
              { title: 'Services', path: '/services' },
              { title: 'Projets', path: '/projects' },
              { title: 'Experiences', path: '/experiences' },
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
