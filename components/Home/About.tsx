"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0b0b0b]">
      <div className="mx-auto grid min-h-[700px] max-w-[1600px] lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center px-8 py-20 lg:px-20"
        >
          <div className="max-w-[500px]">

            <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#b8914e]">
              ABOUT BILLION CORP
            </span>

            <h2 className="mt-5 font-serif text-[56px] font-normal leading-[1.1] text-white">
              Investing in Vision.
              <br />
              Growing Exceptional
              <br />
              Businesses.
            </h2>

            <div className="mt-8 h-[2px] w-14 bg-[#b8914e]" />

            <p className="mt-9 text-[18px] leading-9 text-[#b9b9b9]">
              Founded with a vision to create sustainable long-term
              value, Billion Corp is the parent company behind a
              growing portfolio of businesses operating across
              multiple industries.
            </p>

            <p className="mt-8 text-[18px] leading-9 text-[#b9b9b9]">
              We invest in companies with strong brands,
              exceptional leadership and scalable business
              models while providing strategic direction,
              governance and capital to accelerate growth.
            </p>

            <Link
              href="/about"
              className="group mt-12 inline-flex items-center gap-3 text-[15px] font-medium uppercase tracking-[0.08em] text-[#b8914e]"
            >
              READ MORE ABOUT US

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[700px]"
        >
          <Image
            src="/home/about/1.png"
            alt="About Billion Corp"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

      </div>
    </section>
  );
}