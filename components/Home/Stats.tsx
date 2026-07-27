"use client";

import CountUp from "react-countup";
import {
  Building2,
  Users,
  ShoppingBag,
  Globe2,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 6,
    suffix: "+",
    title: "Companies",
  },
  {
    icon: Users,
    value: 300,
    suffix: "+",
    title: "Corporate Clients",
  },
  {
    icon: ShoppingBag,
    value: 16000,
    suffix: "+",
    title: "Retail Customers",
  },
  {
    icon: Globe2,
    value: 2,
    suffix: "",
    title: "Countries",
  },
  {
    icon: BriefcaseBusiness,
    value: 100,
    suffix: "+",
    title: "Employees",
  },
  {
    icon: TrendingUp,
    value: null,
    suffix: "",
    title: "Growing\nEvery Year",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-[#2a2a2a] bg-[#080808]">
      <div className="mx-auto max-w-[1500px] px-6 py-16">

        <p className="mb-10 text-xs uppercase tracking-[0.35em] text-[#C89B53]">
          AT A GLANCE
        </p>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-3 xl:grid-cols-6">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center border-[#2a2a2a] px-6 text-center xl:border-r last:border-r-0"
              >
                <Icon
                  size={38}
                  className="mb-5 text-[#C89B53]"
                />

                {item.value !== null ? (
                  <h3 className="font-serif text-5xl text-white">
                    <CountUp
                      end={item.value}
                      duration={3}
                    />
                    {item.suffix}
                  </h3>
                ) : (
                  <h3 className="font-serif text-4xl text-white">
                    Growing
                  </h3>
                )}

                <p className="mt-3 whitespace-pre-line text-sm uppercase tracking-[0.15em] text-gray-400">
                  {item.title}
                </p>
              </div>
            );

          })}
        </div>

      </div>
    </section>
  );
}