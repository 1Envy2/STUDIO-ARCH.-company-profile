'use client';

import { motion } from 'framer-motion';

const pressItems = [
  {
    year: '2023',
    media: 'ArchDaily',
    title: '"A House of Concrete and Light in Jakarta"',
    link: '#',
    linkText: 'Baca',
  },
  {
    year: '2022',
    media: 'IAI Awards',
    title: 'Nominasi Kategori Residensial',
    link: '#',
    linkText: 'Lihat',
  },
  {
    year: '2021',
    media: 'Dezeen',
    title: '"Redefining Tropical Brutalism"',
    link: '#',
    linkText: 'Baca',
  },
  {
    year: '2020',
    media: 'Designboom',
    title: 'Top 10 Emerging Studios in Southeast Asia',
    link: '#',
    linkText: 'Baca',
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-12 bg-[#FAFAFA] flex flex-col items-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-xl font-medium tracking-widest uppercase text-black/90 mb-16">
          Publikasi & Penghargaan
        </h1>

        <div className="flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-xs tracking-widest uppercase text-black/40 mb-4">
            <div className="col-span-2">Tahun</div>
            <div className="col-span-3">Media / Instansi</div>
            <div className="col-span-6">Kategori / Judul Artikel</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          {/* Table Rows */}
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
              className="grid grid-cols-12 gap-4 py-6 border-b border-slate-200 text-sm md:text-base text-black/80 hover:text-black hover:bg-slate-50 transition-colors group"
            >
              <div className="col-span-2 font-light">{item.year}</div>
              <div className="col-span-3 font-medium">{item.media}</div>
              <div className="col-span-6 font-light">{item.title}</div>
              <div className="col-span-1 text-right">
                <a href={item.link} className="text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors">
                  {item.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
