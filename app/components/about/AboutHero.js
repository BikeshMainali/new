'use client';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-gray-900 text-white py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Crafting Digital Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          We're a team of innovators, strategists, and creators dedicated to transforming your digital vision into reality.
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-[url('/assets/about-pattern.svg')] bg-cover opacity-10" />
    </section>
  );
}