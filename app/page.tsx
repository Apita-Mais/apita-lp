import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <AnimateEnter className="mx-auto w-full max-w-5xl px-10">
      <Hero />
      <About />
    </AnimateEnter>
  );
}
