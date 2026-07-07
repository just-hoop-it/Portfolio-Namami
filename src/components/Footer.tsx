import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { contactInfo } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-24 py-12 bg-stone-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="font-serif text-lg font-medium text-stone-900 mb-2">
              Get in touch
            </h4>
            <p className="text-sm text-stone-600 max-w-sm">
              Opportunities in robotics, mechanical engineering, and electronic systems are welcome.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-stone-600 hover:text-[#606C38] transition-colors p-1"
                aria-label="Email"
                id="footer-email-link"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-stone-600 hover:text-[#606C38] transition-colors p-1"
                aria-label="LinkedIn"
                id="footer-linkedin-link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-stone-600 hover:text-[#606C38] transition-colors p-1"
                aria-label="GitHub"
                id="footer-github-link"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <span>&copy; {new Date().getFullYear()} Namami Diwan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
