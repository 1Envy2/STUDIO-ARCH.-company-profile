'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'House M',
    location: 'Jakarta, 2023.',
    category: 'Residensial',
    image: '/images/arch_project1.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    name: 'The Concrete Office',
    location: 'Bandung, 2022.',
    category: 'Komersial',
    image: '/images/arch_project2.jpg',
    aspect: 'aspect-[16/9]',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8 md:px-12 bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row gap-8 mb-20 text-sm tracking-widest uppercase">
        <button className="text-black/90 font-medium text-left">Semua</button>
        <button className="text-black/40 hover:text-black/90 transition-colors text-left">Residensial</button>
        <button className="text-black/40 hover:text-black/90 transition-colors text-left">Komersial</button>
        <button className="text-black/40 hover:text-black/90 transition-colors text-left">Hospitalitas</button>
      </div>

      <div className="columns-1 md:columns-2 gap-8 md:gap-16 space-y-8 md:space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="break-inside-avoid relative group cursor-pointer"
          >
            <div className={`relative w-full ${project.aspect} overflow-hidden bg-slate-100`}>
              <Image 
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">{project.name}</h2>
                <p className="text-sm tracking-widest uppercase text-white/80">{project.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
