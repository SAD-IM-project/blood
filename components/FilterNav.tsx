"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FilterNav() {
  const path = usePathname();
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 pointer-events-auto">
      <Link
        href="/all"
        className={`text-muted-foreground text-base transition-colors hover:text-foreground cursor-pointer ${path==="/all" ? " text-blue-500" : ""}`}
      >
        All
      </Link>
      <Link
        href="/blood"
        className={`text-muted-foreground text-base transition-colors hover:text-foreground cursor-pointer ${path==="/blood" ? " text-blue-500" : ""}`}
      >
        Blood
      </Link>
      <Link
        href="/research"
        className={`text-muted-foreground text-base transition-colors hover:text-foreground cursor-pointer ${path==="/research" ? " text-blue-500" : ""}`}
      >
        Research
      </Link>
    </nav>
  );
}
