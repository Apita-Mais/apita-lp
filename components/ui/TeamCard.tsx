"use client";

import Image from "next/image";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

import { Title } from "../utils/Title";
import { Typography } from "../utils/Typography";

import { TeamProps } from "@/types/team";

export function TeamCard(props: TeamProps) {
  const { href, image, name, bio } = props;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <a
      href={href}
      target="_blank"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative max-w-[277px] overflow-hidden rounded-xl"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-primary/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(
								650px circle at ${mouseX}px ${mouseY}px,
								rgba(255,255,255,0.1),
								transparent 80%
						)
				`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-primary/10 p-6">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            width={300}
            height={300}
            alt={name}
            className="opacity-70 duration-500 group-hover:scale-105 group-hover:opacity-100"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </div>
        <div className="space-y-1">
          <Title size="xl">{name}</Title>
          <Typography>{bio}</Typography>
        </div>
      </div>
    </a>
  );
}
