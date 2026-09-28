'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-screen">
        <Image 
          src="/images/arch_hero.jpg"
          alt="Interior ruang tamu minimalis dengan cahaya alami"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-20 left-6 md:left-20 z-10 text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-4 leading-tight"
          >
            Proporsi.<br />Material.<br />Cahaya.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base tracking-widest uppercase max-w-md leading-relaxed mb-8 text-white/80"
          >
            Merespons ruang, lingkungan, dan perilaku manusia.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/projects" className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-white/60 hover:border-white/60 transition-all">
              Telusuri Karya
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-snug">
              Biro arsitektur yang berdedikasi pada penciptaan ruang yang jujur, esensial, dan bertahan melintasi zaman.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-slate-600 leading-relaxed font-light"
          >
            <p>
              Setiap tapak memiliki bahasanya sendiri. Tugas kami adalah mendengarkan dan meresponsnya melalui susunan material, geometri, dan masuknya cahaya alami.
            </p>
            <p>
              Kami tidak merancang monumen. Kami merancang panggung kehidupan tempat rutinitas menjadi ritual, dan setiap sudut memiliki fungsi yang telah diperhitungkan secara matang.
            </p>
            <div className="pt-8">
              <Link href="/studio" className="text-xs font-semibold tracking-widest uppercase text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">
                Mengenal Studio Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disciplines / Services */}
      <section className="py-20 px-6 md:px-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-12">Disiplin Ilmu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Arsitektur", desc: "Perancangan struktur bangunan residensial dan komersial yang merespons iklim tropis dan konteks tapak." },
              { title: "Desain Interior", desc: "Penataan ruang dalam yang berfokus pada proporsi skala manusia, material taktil, dan pencahayaan." },
              { title: "Lanskap", desc: "Integrasi elemen hijau yang meleburkan batasan antara area luar ruangan dan ruang privasi." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="group"
              >
                <div className="h-px w-full bg-slate-200 mb-6 group-hover:bg-slate-900 transition-colors duration-500"></div>
                <h4 className="text-xl font-medium text-slate-900 mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Stack */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Karya Terpilih</h3>
          <Link href="/projects" className="hidden md:inline-block text-xs font-semibold tracking-widest uppercase text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">
            Lihat Semua Proyek
          </Link>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-slate-100">
              <Image 
                src="/images/arch_project1.jpg"
                alt="House M"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h4 className="text-xl font-medium text-slate-900">House M</h4>
                <p className="text-sm text-slate-500 mt-1">Residensial, Jakarta</p>
              </div>
              <span className="text-xs text-slate-400 tracking-widest">2023</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="group w-full md:w-5/6 ml-auto"
          >
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-100">
              <Image 
                src="/images/arch_project2.jpg"
                alt="The Concrete Office"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h4 className="text-xl font-medium text-slate-900">The Concrete Office</h4>
                <p className="text-sm text-slate-500 mt-1">Komersial, Bandung</p>
              </div>
              <span className="text-xs text-slate-400 tracking-widest">2022</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
