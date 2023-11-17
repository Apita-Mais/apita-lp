import Image from "next/image";
import Link from "next/link";

import { Title } from "../utils/Title";
import { Typography } from "../utils/Typography";

import about from "@/assets/about.jpg";

export function About() {
  return (
    <section className="space-y-6 pb-40" id="about">
      <div className="space-y-2 text-center">
        <Title size="xxxl">
          Te aproximando cada vez <br /> mais do <span>futebol</span>.
        </Title>
        <Typography>
          Onde talento encontra oportunidade: nossa plataforma, nosso orgulho.
        </Typography>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div>
          <Image
            src={about}
            alt="Equipe"
            width={2000}
            height={1700}
            className="-rotate-1 rounded-xl opacity-90 saturate-[1.1]"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </div>
        <div className="space-y-2">
          <Typography size="md" className="leading-relaxed">
            A trajetória do futebol feminino no Brasil é uma que demanda coragem
            e resiliência. Por anos, atletas talentosas desafiaram adversidades,
            batalhando não apenas contra suas oponentes no campo, mas também
            contra o preconceito e a falta de visibilidade. No entanto, o nosso{" "}
            <Link
              href="/team"
              className="font-semibold text-primary duration-300 hover:text-primary/80"
            >
              time
            </Link>{" "}
            está transformando essa narrativa de subestimação em uma história de
            triunfo e empoderamento.
          </Typography>
          <Typography size="md" className="leading-relaxed">
            A nossa missão é ampliar as vozes das jogadoras, treinadoras,
            árbitras e torcedoras do futebol feminino. Essa plataforma oferece
            um espaço onde você ficará por dentro de todas as partidas e
            notícias. A revolução do futebol feminino começa agora, na nossa{" "}
            <a
              href="https://apitamais.com.br"
              target="_blank"
              className="font-semibold text-primary duration-300 hover:text-primary/80"
            >
              plataforma
            </a>
            !
          </Typography>
        </div>
      </div>
    </section>
  );
}
