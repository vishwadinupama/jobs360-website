import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadCrumbItem = {
  label: string;
  href?: string;
};

type BreadCrumbProps = {
  items?: BreadCrumbItem[];
};

export default function BreadCrumb({
  items = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ],
}: BreadCrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-transparent">
      <ol className="flex items-center gap-2 text-sm font-semibold">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-[#2563eb] transition hover:text-[#1d4ed8]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600">{item.label}</span>
              )}

              {!isLast && <ChevronRight size={14} className="text-slate-400" strokeWidth={2.6} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
