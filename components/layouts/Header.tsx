"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "News", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-black/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}

        <Image
          src="/loogoo.png"
          alt="Billion"
          width={220}
          height={90}
          priority
          className="h-16 w-auto object-contain"
        />

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm uppercase tracking-[0.18em] text-white transition hover:text-[#C89B53]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C89B53] transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right */}

        <div className="hidden lg:flex">
          <button className="flex items-center gap-2 border border-[#C89B53] px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#C89B53] transition hover:bg-[#C89B53] hover:text-black">
            Download Profile
            <Download size={17} />
          </button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobile(!mobile)}
          className="text-white lg:hidden"
        >
          {mobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobile && (
        <div className="border-t border-[#2c2c2c] bg-black lg:hidden">
          <nav className="flex flex-col py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobile(false)}
                className="px-8 py-4 uppercase tracking-[0.15em] text-white transition hover:bg-[#C89B53] hover:text-black"
              >
                {item.name}
              </Link>
            ))}

            <div className="px-8 pt-6">
              <button className="flex w-full items-center justify-center gap-2 border border-[#C89B53] py-3 text-[#C89B53]">
                Download Profile
                <Download size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}