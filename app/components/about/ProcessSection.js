'use client';
import { motion } from 'framer-motion';
import { FiSearch, FiLayers, FiCode } from 'react-icons/fi';

export default function ProcessSection() {
  const steps = [
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "Discovery",
      description: "Understanding your goals and laying the foundation."
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Strategy",
      description: "Data-backed, goal-driven, and visionary planning."
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Development",
      description: "Execution with innovation and measurable success."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ... (keep existing ProcessSection code) ... */}
        </div>
      </div>
    </section>
  );
}