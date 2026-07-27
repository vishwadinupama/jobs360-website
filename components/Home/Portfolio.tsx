"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  {
    image: "/home/portfolio/1.png",
    title: "Luxe Colombo",
    subtitle: "Luxury Gourmet Supermarket",
  },
  {
    image: "/home/portfolio/2.png",
    title: "Global Flavours",
    subtitle: "Food Imports & Distribution",
  },
  {
    image: "/home/portfolio/3.png",
    title: "Aleph Technologies",
    subtitle: "Technology & Digital Solutions",
  },
  {
    image: "/home/portfolio/4.png",
    title: "Il Mondo Del Gusto",
    subtitle: "International Sourcing & Export",
  },
  {
    image: "/home/portfolio/5.png",
    title: "Luxe Boutique",
    subtitle: "Luxury Retail Lifestyle",
  },
  {
    image: "/home/portfolio/6.png",
    title: "Luxe Redefined",
    subtitle: "Luxury Concierge Experiences",
  },
];

export default function Portfolio() {
  return (
    <section
      className="relative overflow-hidden border-y border-[#2b2b2b] bg-black py-24"
      style={{
        backgroundImage: "url('/home/portfolio/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-[1450px] px-6">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-[#C89B53]">
              OUR PORTFOLIO
            </span>

            <h2 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-white">
              A Diverse Portfolio
              <br />
              of Strong Brands
            </h2>

          </div>

          <Link
            href="/portfolio"
            className="inline-flex border border-[#C89B53] px-8 py-4 text-sm uppercase tracking-[0.15em] text-[#C89B53] transition hover:bg-[#C89B53] hover:text-black"
          >
            View All Companies
          </Link>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">

          {companies.map((company, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-[#3a3a3a] bg-[#111111] transition hover:border-[#C89B53]"
            >

              <div className="relative h-[260px] overflow-hidden">

                <Image
                  src={company.image}
                  alt={company.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              <div className="space-y-4 p-6">

                <h3 className="font-serif text-2xl text-white">
                  {company.title}
                </h3>

                <p className="text-sm leading-7 text-white/65">
                  {company.subtitle}
                </p>

                <ArrowRight
                  size={18}
                  className="text-[#C89B53] transition group-hover:translate-x-2"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}