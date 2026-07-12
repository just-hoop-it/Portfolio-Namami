{/*import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Cpu, Code, HelpCircle } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import { slugify } from '../data';

export default function WorkSection() {
  const [filter, setFilter] = useState<string>('All');

  // Derive unique categories/tags for filters
  const filterCategories = ['All', 'Robotics', 'Simulation', 'CAD Design', 'Python', 'MATLAB'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase() === filter.toLowerCase() || (tag === 'CAD Design' && filter === 'CAD Design')));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-12"
    >

      <section className="space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-stone-900">
          My Projects
        </h1>
        <p className="text-base text-stone-600 max-w-xl leading-relaxed">
          A showcase of systems-level designs, physical robots, structural dynamic models, and computations built during my academic tracks.
        </p>
      </section>*/}

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Cpu, Code, HelpCircle } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

interface WorkSectionProps {
  targetProjectTitle?: string | null;
  clearTargetProject?: () => void;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export default function WorkSection({ targetProjectTitle, clearTargetProject }: WorkSectionProps) {
  const [filter, setFilter] = useState<string>('All');
  const [highlightedProject, setHighlightedProject] = useState<string | null>(null);

  // Derive unique categories/tags for filters
  const filterCategories = ['All', 'Robotics', 'Simulation', 'CAD Design', 'Python', 'MATLAB'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase() === filter.toLowerCase() || (tag === 'CAD Design' && filter === 'CAD Design')));

  useEffect(() => {
    if (targetProjectTitle) {
      // Reset filter to All to ensure the requested project is rendered and visible in the DOM
      setFilter('All');

      const timer = setTimeout(() => {
        const slug = slugify(targetProjectTitle);
        const element = document.getElementById(`project-${slug}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setHighlightedProject(targetProjectTitle);

          const highlightTimer = setTimeout(() => {
            setHighlightedProject(null);
            if (clearTargetProject) {
              clearTargetProject();
            }
          }, 2500); // Highlight lasts for 2.5 seconds

          return () => clearTimeout(highlightTimer);
        }
      }, 150); // Small delay to let the DOM filter transition complete

      return () => clearTimeout(timer);
    }
  }, [targetProjectTitle, clearTargetProject]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-12"
    >
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-stone-900">
          My Projects
        </h1>
        <p className="text-base text-stone-600 max-w-xl leading-relaxed">
          A showcase of systems-level designs, physical robots, structural dynamic models, and computations built during my academic tracks.
        </p>
      </section>

      {/* Tags Filter Row */}
      <section className="flex flex-wrap gap-2 border-b border-stone-200 pb-6">
        {filterCategories.map((category) => (
          <button
            key={category}
            id={`filter-${category.toLowerCase().replace(' ', '-')}`}
            onClick={() => setFilter(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
              filter === category
                ? 'bg-[#606C38] text-[#FEFAE0] shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/60'
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project, idx) => {
          const isHighlighted = highlightedProject === project.title;
          return (
            <motion.div
              key={project.title}
              id={`project-${slugify(project.title)}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between transition-all duration-500 border ${
                isHighlighted
                  ? 'bg-[#FEFAE0]/50 border-[#606C38] ring-2 ring-[#606C38]/30 shadow-md scale-[1.01]'
                  : 'bg-stone-50 border-stone-200/60 hover:border-stone-300'
              }`}
            >
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  {project.title}
                </h3>
                {project.association && (
                  <span className="text-xs font-mono text-stone-500 bg-stone-150/40 px-2.5 py-1 rounded-md border border-stone-200/50 self-start sm:self-auto">
                    {project.association}
                  </span>
                )}
              </div>

              {/* Tags block */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white border border-stone-200 text-stone-600 font-mono text-[9px] uppercase rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Detailed achievements bullets */}
              <ul className="space-y-2.5 pt-2">
                {project.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#606C38] mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Document Links block*/}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-200/50">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (link.url === '#') {
                        e.preventDefault();
                        alert(`This document link ("${link.label}") is currently a placeholder representing your CV reference. You can host this file (e.g. on Google Drive, GitHub, or server) and update the link inside '/src/data.ts'.`);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#606C38] hover:text-stone-900 hover:underline transition-colors"
                    id={`link-${idx}-${lIdx}`}
                  >
                    {/*<ExternalLink className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                    {link.url === '#' && (
                      <span className="text-[9px] px-1 py-0.2 bg-[#FEFAE0] text-[#606C38] rounded border border-[#FEFAE0] font-sans">
                        Placeholder
                      </span>
                    )}*/}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
      </section>
    </motion.div>
  );
}
