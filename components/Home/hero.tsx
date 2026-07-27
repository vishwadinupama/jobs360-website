"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[900px] overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/home/hero/5.png"
        alt="Billion Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-center px-8 pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-[640px]"
        >
          <h1 className="font-serif text-6xl leading-tight text-white xl:text-7xl">
            Building Businesses.
            <br />
            <span className="text-[#C89B53]">
              Creating Lasting Value.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
            Billion Corp (Pvt) Ltd is a diversified investment holding
            company focused on retail, technology, international trade,
            hospitality and premium lifestyle ventures across Sri Lanka
            and Europe.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="flex items-center gap-3 bg-[#C89B53] px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-black transition hover:bg-[#d9ae6b]">
              Explore Our Companies
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:border-[#C89B53] hover:text-[#C89B53]">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Indicator */}
      <div className="absolute right-12 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
        <span className="text-xs tracking-[0.3em] text-[#C89B53]">
          01
        </span>

        <div className="h-28 w-px bg-white/20">
          <div className="h-8 bg-[#C89B53]" />
        </div>

        <span className="text-xs tracking-[0.3em] text-white/40">
          02
        </span>

        <span className="text-xs tracking-[0.3em] text-white/40">
          03
        </span>
      </div>
    </section>
  );
}