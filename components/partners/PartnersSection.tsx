"use client"
import React from 'react';
import PartnerLogo from './PartnerLogo';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const partners = [
  {
    name: 'Partner 1',
    logoSrc: '/svgs/anothest.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 2',
    logoSrc: '/svgs/Logos.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 2',
    logoSrc: '/svgs/another.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 2',
    logoSrc: '/svgs/another.png',
    url: 'https://example.com',
  },
  // Ensure the rest of the partners have unique logoSrc values
];

const PartnersSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <section className="bg-[#FEFBF6] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#7F5283]">Conference Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <PartnerLogo {...partner} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnersSection;
