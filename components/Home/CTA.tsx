"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/home/cta/1.png"
          alt="CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative mx-auto flex min-h-[700px] max-w-[1450px] items-center px-6 py-24">

        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_420px]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="text-xs uppercase tracking-[0.35em] text-[#C89B53]">
              START YOUR JOURNEY
            </span>

            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-white lg:text-6xl">
              Let's Build
              <br />
              The Future
              <br />
              Together.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Whether you're looking to collaborate, invest,
              join our team or simply learn more about Billion Corp,
              we'd love to hear from you.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#C89B53] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#d7ad6d]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/careers"
                className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:border-[#C89B53] hover:text-[#C89B53]"
              >
                Careers
              </Link>

            </div>

          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <h3 className="font-serif text-3xl text-white">
              Contact Information
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">

                <Phone
                  size={22}
                  className="mt-1 text-[#C89B53]"
                />

                <div>

                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    Phone
                  </p>

                  <p className="mt-2 text-lg text-white">
                    +94 11 234 5678
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail
                  size={22}
                  className="mt-1 text-[#C89B53]"
                />

                <div>

                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    Email
                  </p>

                  <p className="mt-2 text-lg text-white">
                    info@billioncorp.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin
                  size={22}
                  className="mt-1 text-[#C89B53]"
                />

                <div>

                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    Office
                  </p>

                  <p className="mt-2 leading-7 text-white">
                    123 Business Avenue,
                    <br />
                    Colombo 03,
                    <br />
                    Sri Lanka
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}