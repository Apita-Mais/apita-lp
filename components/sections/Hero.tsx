import { Button } from "../utils/Button";
import { Title } from "../utils/Title";
import { Typography } from "../utils/Typography";
import { PlatformButton } from "../ui/PlatformButton";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh_-_80px)] items-center justify-center">
      <div className="mx-auto w-full space-y-7 text-center">
        <Title>
          Elevando o <span className="text-primary">futebol feminino</span>{" "}
          <br className="max-md:hidden" /> para um novo{" "}
          <span className="text-primary">patamar</span>.
        </Title>
        <Typography
          size="md"
          className="mx-auto w-full max-w-2xl leading-relaxed"
        >
          Celebrando a força do futebol feminino, onde cada jogada é um passo em
          direção à igualdade e excelência esportiva.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PlatformButton />
          <a href="#about">
            <Button variant="outline">Sobre</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
