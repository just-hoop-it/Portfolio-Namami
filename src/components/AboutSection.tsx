import React from 'react';
import { motion } from 'motion/react';
import { name } from '../data';

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-16"
    >
      {/* Editorial Profile Description */}
      <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-stone-900" style={{ marginBottom: "-1px" }}>
        Hey there! I'm <span className="italic">Namami</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">

        <div className="md:col-span-8 space-y-6">

          <p className="text-stone-700 leading-relaxed text-base">
            I am a Mechanical Engineering senior at <a href="https://www.iiitdmj.ac.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Jabalpur</a>, also studying Electronic Systems at <a href="https://study.iitm.ac.in/es/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Indian Institute of Technology (IIT) Madras</a>. A lot of the engineering problems I'm interested in solving need both: understanding how something is built, and how it senses and communicates. So I decided to build side by side both the skill sets, by implementing time management and my eagerness to learn.
          </p>
          <p className="text-stone-700 leading-relaxed text-base">
          Outside of work, I spend a lot of my free time teaching science and mathematics to students of various age groups, and it's become one of my favourite creative outlets. Every person learns differently, and I am always looking for new ways to make the concepts comprehensible for different minds. I love playing basketball, but what I value most about sports is that they strengthen our resilience, teamwork, and confidence. Such lessons bear fruits beyond games, in all walks of life. I enjoy playing piano and learning a variety of songs.
          </p>
          <p className="text-stone-700 leading-relaxed text-base">
            I am always open to any questions, advice or suggestions. If you wish to share any, feel free to contact me via <a href="mailto:diwannamami24@gmail.com" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>email</a> or any of the media listed below!
          </p>
        </div>

        {/* Headshot Card */}
        <div className="md:col-span-4 space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-100 shadow-sm group">
            <img
              src="/Images/Namami-Headshot.jpeg"
              alt="Namami Diwan"
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            {/* Elegant vignette or inner border overlay */}
            <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
          </div>

        </div>
      </section>
    </motion.div>
  );
}
