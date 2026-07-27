"use client";

import Image from "next/image";
import Link from "next/link";
import {
  //FacebookIcon,
  //InstagramIcon,
  //LinkedinIcon,
  //YoutubeIcon,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "News", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const companies = [
  "Luxe Colombo",
  "Global Flavours",
  "Aleph Technologies",
  "Luxe Boutique",
  "Il Mondo Del Gusto",
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">

      <div className="mx-auto max-w-[1450px] px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">

          {/* Company */}

          <div>

            <Image
              src="/loogoo.png"
              alt="Billion"
              width={170}
              height={70}
            />

            <p className="mt-8 max-w-md leading-8 text-gray-400">
              Billion Corp (Pvt) Ltd is a diversified investment holding
              company focused on building sustainable businesses through
              innovation, excellence and strategic partnerships.
            </p>

            <div className="mt-8 flex gap-4">

              {/* {[FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon].map((Icon, index) => (

                <Link
                  key={index}
                  href="/"
                  className="rounded-full border border-[#C89B53]/40 p-3 transition hover:bg-[#C89B53] hover:text-black"
                >
                  <Icon size={18} />
                </Link>

              ))} */}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-8 font-serif text-2xl text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-[#C89B53]"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Portfolio */}

          <div>

            <h3 className="mb-8 font-serif text-2xl text-white">
              Portfolio
            </h3>

            <ul className="space-y-4">

              {companies.map((item) => (

                <li
                  key={item}
                  className="text-gray-400 hover:text-[#C89B53] transition cursor-pointer"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 font-serif text-2xl text-white">
              Contact
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">

                <Phone
                  size={20}
                  className="text-[#C89B53]"
                />

                <span className="text-gray-400">
                  +94 11 234 5678
                </span>

              </div>

              <div className="flex gap-4">

                <Mail
                  size={20}
                  className="text-[#C89B53]"
                />

                <span className="text-gray-400">
                  info@billioncorp.com
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin
                  size={20}
                  className="text-[#C89B53]"
                />

                <span className="text-gray-400 leading-7">
                  No. 123,<br />
                  Business Avenue,<br />
                  Colombo 03,<br />
                  Sri Lanka
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#202020]">

        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Billion Corp (Pvt) Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link
              href="/privacy-policy"
              className="hover:text-[#C89B53]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#C89B53]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}