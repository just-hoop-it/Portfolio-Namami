import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projects, name, headline, bio } from '../data';

interface HomeSectionProps {
  setCurrentTab: (tab: string) => void;
}

export default function HomeSection({ setCurrentTab }: HomeSectionProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-16"
    >
      {/* Editorial Profile Header */}
      <section className="space-y-6 pt-6">
        
        <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.05]">
          Namaste!
        </h1>
        
        <p className="font-serif text-2xl md:text-3xl text-stone-700 leading-snug max-w-2xl font-light">
          {headline}
        </p>
        
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
          {bio}
        </p>
        
        {/* Headshot Card */}
        <div className="md:col-span-4 space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-100 shadow-sm group">
            <img
              src={`${import.meta.env.BASE_URL}Images/Namami-Diwan.jpeg`}
              alt="Namami Diwan"
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            {/* Elegant vignette or inner border overlay */}
            <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Featured Projects List */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl font-normal text-stone-900">
            Selected Works
          </h2>
          <button
            onClick={() => setCurrentTab('work')}
            className="group flex items-center gap-1 text-sm font-medium text-[#606C38] hover:text-stone-900 transition-colors"
            id="all-works-btn"
          >
            All projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="p-6 bg-stone-50 hover:bg-stone-100/50 border border-stone-200/60 rounded-3xl transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-3 max-w-xl">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 bg-white border border-stone-200 text-stone-500 font-mono text-[10px] uppercase rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl font-medium text-stone-900 group-hover:text-[#606C38] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed line-clamp-2">
                  {project.description[0]}
                </p>
              </div>

              <button
                onClick={() => setCurrentTab('work')}
                className="p-3 bg-white rounded-full border border-stone-200/80 text-stone-500 group-hover:text-white group-hover:bg-[#606C38] group-hover:border-[#606C38] transition-all self-end md:self-auto shadow-sm"
                aria-label={`View ${project.title}`}
                id={`featured-view-${idx}`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
