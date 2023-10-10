import { Button } from "../Button";
import { Typography } from "../Typography";

export function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh_-_80px)]">
      <div className="max-w-xl w-full mx-auto text-center space-y-5">
        <Typography variant="bold" size="xxxl">
          Elevando o <span className="text-primary">futebol feminino</span> para
          um novo <span className="text-primary">patamar!</span>
        </Typography>
        <Typography size="md">
          Celebrando a força do futebol feminino, onde cada jogada é um passo em
          direção à igualdade e excelência esportiva.
        </Typography>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <Button>Plataforma</Button>
          <Button variant="outline">História</Button>
        </div>
      </div>
    </section>
  );
}
