import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Header({ currentTab, setCurrentTab }: HeaderProps) {
  const tabs = ['home', 'work', 'about', 'contact'];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF7]/85 backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => setCurrentTab('home')}
          className="group flex items-center gap-2.5 text-left"
          id="logo-btn"
        >
          <div>
            <span className="font-serif text-xl font-medium tracking-tight block text-stone-900 group-hover:text-[#606C38] transition-colors">
              Namami
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-1 sm:gap-4">
          {tabs.map((tab) => {
            const isActive = currentTab === tab;
            return (
              <button
                key={tab}
                id={`nav-${tab}`}
                onClick={() => setCurrentTab(tab)}
                className={`relative px-3 py-2 text-sm font-medium capitalize tracking-wide transition-colors ${
                  isActive ? 'text-[#606C38]' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#606C38] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
