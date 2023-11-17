"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.svg";

import { motion } from "framer-motion";
import { navLinks } from "@/data/header";
import { cn } from "@/lib/utils";

export function Header() {
  const [hovered, setHovered] = useState("");
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 20 ? setIsScrolled(true): setIsScrolled(false)
    }
  }, [])

  return (
    <header className={cn("border-b sticky top-0 h-20 w-full z-[999]", {
      "bg-background/30 backdrop-blur-lg border-primary/10": isScrolled,
      "bg-transparent border-transparent": !isScrolled
    })}>
      <nav className="mx-auto flex h-full w-full max-w-5xl items-center justify-between px-10">
        <Link href="/">
          <Image src={logo} alt="Logo" width={80} />
        </Link>
        <ul className="flex items-center text-foreground">
          {navLinks.map(({ id, href, name }) => {
            const isHovered = hovered === href;

            return (
              <li key={id}>
                <Link
                  href={href}
                  className="text-sm font-medium text-foreground/80 duration-150 hover:text-foreground"
                >
                  <motion.span
                    onHoverStart={() => setHovered(href)}
                    onHoverEnd={() => setHovered("")}
                    className="relative px-3 py-2"
                  >
                    {isHovered && (
                      <motion.span
                        className="absolute inset-0 z-[-1] rounded-lg bg-primary/20"
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
