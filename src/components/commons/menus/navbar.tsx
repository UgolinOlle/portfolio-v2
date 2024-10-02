'use client'

import React, { SetStateAction, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Mouse, BriefcaseBusiness, NotebookPen } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

export const Navbar: React.FC = () => {
  // -- Variables
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // -- Functions
  const handleTabChange = (value: SetStateAction<string>) => {
    setActiveTab(value)
  }

  const handleNavigation = (path: string, title?: string) => {
    setActiveTab(title || path)
    router.push(path)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const pathMap: { [key: string]: string } = {
      '/': 'À propos',
      '/services': 'Services',
      '/experiences': 'Experiences',
      '/projects': 'Projets',
      '/contact': 'Contact',
      '/notes': 'Notes',
      '/uses': 'Uses',
    }
    const dynamicPaths = [{ pattern: /^\/projects\/.+$/, tab: 'Projets' }]
    let activeTab = pathMap[pathname] || 'about'
    dynamicPaths.forEach(({ pattern, tab }) => {
      if (pattern.test(pathname)) {
        activeTab = tab
      }
    })

    setActiveTab(activeTab)
  }, [pathname])

  // -- Render
  return (
    <nav className="mb-8">
      <div className="flex items-center justify-start lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full flex-col items-start justify-between lg:flex lg:flex-row lg:items-center`}
      >
        {/* Onglets alignés à gauche */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full lg:w-auto"
        >
          <TabsList className="flex h-auto flex-col lg:flex-grow lg:flex-row lg:justify-start">
            {[
              { title: 'À propos', path: '/' },
              { title: 'Services', path: '/services' },
              { title: 'Projets', path: '/projects' },
              { title: 'Contact', path: '/contact' },
            ].map((tab) => (
              <TabsTrigger
                key={tab.title}
                value={tab.title}
                onClick={() => handleNavigation(tab.path, tab.title)}
                className="w-full lg:w-auto"
              >
                {tab.title.charAt(0).toUpperCase() + tab.title.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Onglets alignés à droite */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full lg:w-auto"
        >
          <TabsList className="flex h-auto flex-col lg:ml-auto lg:flex-row lg:justify-end">
            <TabsTrigger
              value="Notes"
              onClick={() => handleNavigation('/notes', 'Notes')}
              className="flex w-full items-center lg:w-auto"
            >
              <span className="lg:hidden">Notes</span>
              <NotebookPen size={20} className="hidden lg:inline" />
            </TabsTrigger>
            <TabsTrigger
              value="Experiences"
              onClick={() => handleNavigation('/experiences', 'Experiences')}
              className="flex w-full items-center lg:w-auto"
            >
              <span className="lg:hidden">Experiences</span>
              <BriefcaseBusiness size={20} className="hidden lg:inline" />
            </TabsTrigger>

            <TabsTrigger
              value="Uses"
              onClick={() => handleNavigation('/uses', 'Uses')}
              className="flex w-full items-center lg:w-auto"
            >
              <span className="lg:hidden">Uses</span>
              <Mouse size={20} className="hidden lg:inline" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </nav>
  )
}
