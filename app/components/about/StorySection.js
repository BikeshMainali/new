'use client';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Small Story About Us
          </h2>
          <div className="space-y-6 text-gray-300">
            <p>
            At Chronosync Labs, we believe in a process that’s as dynamic as your goals. It begins with Discovery, where we immerse ourselves in your vision, challenges, and aspirations to lay a solid foundation. Next, we craft a Strategy tailored to your unique needs, blending data-driven insights with creative solutions to map out a clear path forward. Finally, we bring it all to life through Development, executing with precision, innovation, and a focus on delivering measurable, impactful results. Every step is designed to transform your vision into reality seamlessly and successfully.
            </p>
            <p>
              Our methodology includes unique frameworks to optimize for different business models.
              We don't just implement solutions - we analyze the competitive landscape to identify
              what truly differentiates your brand in the digital space.
            </p>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Read More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-80 lg:h-96 bg-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/assets/about-team.jpg')] bg-cover bg-center" />
        </motion.div>
      </div>
    </section>
  );
}