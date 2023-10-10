import { Container } from "@/components/Container";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
    </Container>
  );
}
