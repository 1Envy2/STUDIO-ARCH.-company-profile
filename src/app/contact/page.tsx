'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nama wajib diisi.' }),
  type: z.string({ required_error: 'Pilih tipe proyek.' }),
  location: z.string().min(2, { message: 'Lokasi wajib diisi.' }),
  area: z.string().min(1, { message: 'Luas area wajib diisi.' }),
  message: z.string().min(10, { message: 'Jelaskan visi Anda secara singkat.' }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      area: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
    }, 2000);
  }

  const inputClasses = "w-full bg-transparent border-0 border-b border-slate-300 py-4 px-0 focus:ring-0 focus:outline-none focus:border-black transition-colors rounded-none text-black/90 placeholder:text-black/30 font-light";

  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col"
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black/90 mb-6">
            Memulai Proyek Baru.
          </h1>
          <p className="text-black/60 font-light leading-relaxed mb-16 max-w-sm">
            Silakan lengkapi detail awal mengenai rencana proyek Anda. Kami akan meninjau kecocokan jadwal dan cakupan pekerjaan.
          </p>

          <div className="space-y-8 text-sm tracking-widest uppercase text-black/80 font-medium mt-auto">
            <div>
              <p className="text-black/40 mb-2">Studio</p>
              <p>Jl. Senopati No. 42,<br />Jakarta Selatan 12190</p>
            </div>
            <div>
              <p className="text-black/40 mb-2">Inquiries</p>
              <a href="mailto:office@studioarch.com" className="hover:opacity-50 transition-opacity">office@studioarch.com</a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          {isSuccess ? (
            <div className="h-full flex flex-col justify-center items-start py-20">
              <h2 className="text-2xl font-medium mb-4">Inquiry Diterima.</h2>
              <p className="text-black/60 font-light mb-8">Terima kasih. Kami akan menghubungi Anda dalam 2-3 hari kerja.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Kirim Proyek Lain
              </button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <input 
                  placeholder="Nama Lengkap" 
                  {...form.register("name")} 
                  className={inputClasses} 
                />
                {form.formState.errors.name && <p className="text-red-500 text-xs mt-2">{form.formState.errors.name.message}</p>}
              </div>

              <div>
                <select 
                  {...form.register("type")} 
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled className="text-black/30">Tipe Proyek</option>
                  <option value="residential">Residensial</option>
                  <option value="commercial">Komersial</option>
                  <option value="hospitality">Hospitalitas</option>
                  <option value="other">Lainnya</option>
                </select>
                {form.formState.errors.type && <p className="text-red-500 text-xs mt-2">{form.formState.errors.type.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <input 
                    placeholder="Lokasi Tapak (Kota/Area)" 
                    {...form.register("location")} 
                    className={inputClasses} 
                  />
                  {form.formState.errors.location && <p className="text-red-500 text-xs mt-2">{form.formState.errors.location.message}</p>}
                </div>
                <div>
                  <input 
                    type="number"
                    placeholder="Perkiraan Luas (sqm)" 
                    {...form.register("area")} 
                    className={inputClasses} 
                  />
                  {form.formState.errors.area && <p className="text-red-500 text-xs mt-2">{form.formState.errors.area.message}</p>}
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="Pesan atau Visi Singkat" 
                  {...form.register("message")} 
                  className={`${inputClasses} min-h-[120px] resize-none`} 
                />
                {form.formState.errors.message && <p className="text-red-500 text-xs mt-2">{form.formState.errors.message.message}</p>}
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity disabled:opacity-30"
                >
                  {isSubmitting && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
                  Kirim Inquiry
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
