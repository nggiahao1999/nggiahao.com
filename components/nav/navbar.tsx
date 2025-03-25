"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import NavMenu from "./navmenu";

const navItems: { name: string; href: string }[] = [
  { name: "~", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Work", href: "/work" },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <nav className="flex gap-2 py-2">
      {navItems.map(({ name, href }) => (
        <div key={name + href}>
          <Link
            className={
              "relative transition-all transform-gpu rounded-full px-2 md:px-3 py-1 md:py-2 " +
              (path == href ? "bg-[#f5f5f5] dark:bg-black/30" : "hover:opacity-50")
            }
            href={href}
          >
            {name}
          </Link>
        </div>
      ))}
      <NavMenu />
    </nav>
  );
}