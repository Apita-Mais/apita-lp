"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/header";
import Link from "next/link";

export function Header() {
  const [hovered, setHovered] = useState("");
  const pathname = usePathname();

  return (
    <header className="relative h-20 w-full">
      <nav className="flex justify-between items-center max-w-5xl w-full mx-auto h-full px-4">
        <Image src={logo} alt="Logo" width={120} />
        <ul className="flex items-center text-foreground">
          {navLinks.map(({ id, href, name }) => {
            const isHovered = hovered === href;

            return (
              <li key={id}>
                <Link href={href} className="font-medium text-foreground">
                  <motion.span
                    onHoverStart={() => setHovered(href)}
                    onHoverEnd={() => setHovered("")}
                    className="relative px-3 py-2"
                  >
                    {isHovered && (
                      <motion.span
                        className="absolute rounded-lg bg-foreground/20 inset-0 z-[-1]"
                        layoutId="nav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    {name}
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
