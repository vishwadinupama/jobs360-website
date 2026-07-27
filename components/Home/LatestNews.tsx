"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const news = [
  {
    image: "/home/news/1.png",
    date: "15 JAN 2026",
    category: "Corporate",
    title: "Billion Corp expands its investment portfolio across Asia.",
  },
  {
    image: "/home/news/2.png",
    date: "08 JAN 2026",
    category: "Retail",
    title: "Luxe Colombo launches a new premium shopping experience.",
  },
  {
    image: "/home/news/3.png",
    date: "27 DEC 2025",
    category: "Technology",
    title: "Aleph Technologies introduces innovative digital solutions.",
  },
  {
    image: "/home/news/4.png",
    date: "18 DEC 2025",
    category: "Hospitality",
    title: "Global partnerships strengthen Billion Corp's international reach.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#0b0b0b] py-24">
      <div className="mx-auto max-w-[1450px] px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-[#C89B53]">
              LATEST NEWS
            </span>

            <h2 className="mt-4 font-serif text-5xl leading-tight text-white">
              News &
              <br />
              Insights
            </h2>

          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-3 border border-[#C89B53] px-8 py-4 text-sm uppercase tracking-[0.15em] text-[#C89B53] transition hover:bg-[#C89B53] hover:text-black"
          >
            View All News
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {news.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .7,
              }}
              className="group overflow-hidden bg-[#111111]"
            >

              {/* Image */}

              <div className="relative h-[280px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <span className="absolute left-5 top-5 bg-[#C89B53] px-4 py-2 text-xs font-semibold tracking-widest text-black">
                  {item.category}
                </span>

              </div>

              {/* Content */}

              <div className="space-y-5 p-7">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {item.date}
                </p>

                <h3 className="font-serif text-2xl leading-snug text-white transition group-hover:text-[#C89B53]">
                  {item.title}
                </h3>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#C89B53]"
                >
                  Read More
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-2"
                  />
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}