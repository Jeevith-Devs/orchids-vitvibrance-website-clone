"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black text-white">
      <motion.video
        style={{ scale }}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 -z-20 h-full w-full object-cover grayscale-[20%] opacity-80"
      >
        <source src="https://vitvibrance.com/videos/heroSection.mp4" type="video/mp4" />
      </motion.video>

      <div 
        className="pointer-events-none fixed inset-0 z-10 h-[300%] w-[300%] opacity-[7%]"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/94edbd09-30bd-4628-aeb9-93e9fb6900f8-vitvibrance-com/assets/images/1k_Dissolve_Noise_Texture-29.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
          animation: 'shimmer 8s linear infinite'
        }}
      />

      <div className="absolute left-8 top-4 z-50 md:hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/94edbd09-30bd-4628-aeb9-93e9fb6900f8-vitvibrance-com/assets/images/vitlogo_633cc466-opt-640-2.webp"
          alt="VIT Logo"
          width={530}
          height={201}
          className="h-20 w-auto object-contain"
        />
      </div>
      <div className="absolute right-8 top-4 z-50 md:hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/94edbd09-30bd-4628-aeb9-93e9fb6900f8-vitvibrance-com/assets/images/SWC_4a94b9cc-opt-750-3.webp"
          alt="SWC Logo"
          width={667}
          height={189}
          className="h-20 w-auto object-contain"
        />
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="absolute bottom-24 z-20 hidden w-full items-center justify-center gap-10 space-x-14 bg-gradient-to-t from-black/80 from-10% to-transparent pb-12 pt-48 md:flex"
      >
        <a 
          href="https://drive.google.com/file/d/178-_OyFP-BL9VQ1h_wkBRa3GsV0BvXma/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-white/50 px-10 py-3 font-semibold uppercase tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            Sponsorship Brochure
          </motion.button>
        </a>
        <a href="/gallery">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-white/50 px-10 py-3 font-semibold uppercase tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            View Gallery
          </motion.button>
        </a>
        <a 
          href="https://drive.google.com/file/d/1X549H2ozssnNl1uT1oxslaisqy-7ViyL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-white/50 px-10 py-3 font-semibold uppercase tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            Events Brochure
          </motion.button>
        </a>
      </motion.div>

      <button className="absolute bottom-44 left-1/2 z-20 w-[80%] -translate-x-1/2 transform rounded-xl border border-white/50 bg-black/50 px-6 py-4 text-white shadow-lg transition-colors md:hidden">
        View Brochures & Gallery
      </button>

        <div className="absolute bottom-0 left-0 z-30 flex w-full flex-wrap items-center justify-center bg-black py-6 font-display tracking-widest text-white md:justify-around md:flex-nowrap md:px-10 md:py-8 lg:px-20">
          <div className="hidden text-2xl font-extralight md:block lg:text-[2.25rem]">
            26 FEB - 1 MAR
          </div>
          <div className="hidden text-3xl font-extralight opacity-50 md:block">|</div>
          
          <div className="hidden space-x-8 text-2xl font-extralight md:flex lg:text-[2.25rem]">
            <span>ENGAGE</span>
            <span>ENTHRAL</span>
            <span>ENTERTAIN</span>
          </div>

          <div className="flex w-full justify-center gap-6 px-4 pb-4 text-base font-extralight md:hidden">
            <span>ENGAGE</span>
            <span>ENTHRAL</span>
            <span>ENTERTAIN</span>
          </div>

          <div className="hidden text-3xl font-extralight opacity-50 md:block">|</div>

          <div className="flex w-full items-center justify-center gap-6 px-4 md:w-auto md:justify-center md:px-0">
            <div className="text-base font-extralight md:hidden">26 FEB - 1 MAR</div>
          
          <div className="flex gap-x-6 md:gap-x-4">
            <a href="https://www.facebook.com/VibranceVIT/" className="transition-opacity hover:opacity-80">
              <img src="https://vitvibrance.com/_next/static/media/Facebook.3a0f524d.svg" alt="Facebook" className="h-6 w-auto lg:h-[2rem]" />
            </a>
            <a href="https://x.com/vibrancevit" className="transition-opacity hover:opacity-80">
              <img src="https://vitvibrance.com/_next/static/media/X.8c0fc61f.svg" alt="X" className="h-6 w-auto lg:h-[2rem]" />
            </a>
            <a href="https://www.instagram.com/vibrancevitchennai/" className="transition-opacity hover:opacity-80">
              <img src="https://vitvibrance.com/_next/static/media/Instagram.47ba4f0b.svg" alt="Instagram" className="h-6 w-auto lg:h-[2rem]" />
            </a>
            <a href="https://www.youtube.com/@VITChennaic" className="transition-opacity hover:opacity-80">
              <img src="https://vitvibrance.com/_next/static/media/YouTube.1559edc1.svg" alt="YouTube" className="h-6 w-auto lg:h-[2rem]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;