'use client';

import { motion } from 'framer-motion';
import DigitalSolutions from './DigitalSolutions';
import TechSolutions from './TechSolutions';

const ServicesSection = () => {
  return (
    <div>
      {/* Digital Solutions Section */}
      <DigitalSolutions />
      
      {/* Tech Solutions Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TechSolutions />
      </motion.div>
    </div>
  );
};

export default ServicesSection;