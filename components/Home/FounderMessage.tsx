"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="bg-[#f8f6f2]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex items-center px-8 py-24 lg:px-20"
        >
          <div className="max-w-xl">

            <span className="text-xs uppercase tracking-[0.35em] text-[#C89B53]">
              MESSAGE FROM THE FOUNDER
            </span>

            <Quote
              size={50}
              className="mt-8 text-[#C89B53]"
            />

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#111]">
              Great companies are
              built with vision,
              integrity and people.
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-gray-700">
              At Billion Corp, our mission has always been to build
              businesses that create long-term value for customers,
              employees and society. Every company within our
              portfolio shares the same commitment to excellence,
              innovation and sustainable growth.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-gray-700">
              We continue to invest in people, technology and
              partnerships that shape the future while remaining
              grounded in trust and quality.
            </p>

            {/* Signature */}
            <div className="mt-10">
              <Image
                src="/home/founder/sign.png"
                alt="Signature"
                width={180}
                height={70}
              />
            </div>

            <div className="mt-5">
              <h4 className="font-serif text-2xl text-[#111]">
                John Doe
              </h4>

              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Founder & Chairman
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative min-h-[750px]"
        >
          <Image
            src="/home/founder/1.png"
            alt="Founder"
            fill
            className="object-cover object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}