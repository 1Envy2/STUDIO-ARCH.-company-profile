'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StudioPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-12 bg-[#FAFAFA] flex flex-col items-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black/90 mb-12 leading-tight">
          Desain bukan sekadar bentuk, melainkan bagaimana ruang itu bekerja.
        </h1>
        
        <div className="space-y-8 text-lg text-black/70 leading-relaxed font-light">
          <p>
            Kami memulai setiap proyek dengan memahami tapak (site) dan konteks lingkungan. Pendekatan kami tidak terikat pada satu gaya visual, melainkan pada prinsip bahwa material yang jujur, sirkulasi udara yang baik, dan cahaya alami akan menciptakan ruang yang relevan untuk jangka panjang.
          </p>
          <p>
            Arsitektur yang baik harus merespons siapa yang akan tinggal di dalamnya, bukan hanya terlihat indah di lembar publikasi.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full mt-32"
      >
        <div className="relative w-full aspect-[4/3] bg-slate-200 mb-8 overflow-hidden">
          <Image 
            src="/images/architect_portrait.jpg" 
            alt="Principal Architect"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm tracking-wide text-black/60 leading-relaxed">
          Dipimpin oleh tim arsitek yang berdedikasi, studio ini berfokus pada eksplorasi batas antara arsitektur, lanskap, dan interior.
        </p>
      </motion.div>
    </div>
  );
}
