import Image from "next/image";
import Link from "next/link";

import { Github, Instagram, Twitter } from "lucide-react";

import logo from "@/assets/logo.svg";

import { Typography } from "../utils/Typography";
import { Title } from "../utils/Title";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-gradient-to-t from-transparent via-secondary/50 via-10% to-transparent">
      <div className="mx-auto flex w-full max-w-5xl justify-between gap-[168px] p-12 max-lg:flex-col max-lg:justify-center max-lg:gap-10">
        <div className="max-w-xs space-y-4">
          <Image src={logo} width={100} alt="Logo" />
          <Typography className="leading-relaxed">
            Celebrando a força do futebol feminino, onde cada jogada é um passo
            em direção à igualdade e excelência esportiva.
          </Typography>
          <div className="flex items-center">
            <div className="flex gap-4">
              <a href="https://github.com/apita-mais" target="_blank">
                <Github size={16} className="text-primary" />
              </a>

              <Link href="">
                <Instagram size={16} className="text-primary" />
              </Link>

              <Link href="">
                <Twitter size={16} className="text-primary" />
              </Link>
            </div>
          </div>
          <Typography className="text-xs text-foreground/70">
            © {new Date().getFullYear()}. Todos os direitos reservados.
          </Typography>
        </div>
        <div className="space-y-4">
          <Title size="lg">Acesso rápido</Title>

          <ul className="space-y-4">
            <li className="w-fit text-sm font-medium text-foreground/80 duration-300 hover:text-foreground">
              <Link href="/">Início</Link>
            </li>
            <li className="w-fit text-sm font-medium text-foreground/80 duration-300 hover:text-foreground">
              <Link href="/#about">Sobre</Link>
            </li>
            <li className="w-fit text-sm font-medium text-foreground/80 duration-300 hover:text-foreground">
              <Link href="/team">Equipe</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <Title size="lg">Plataforma</Title>

          <ul className="space-y-4">
            <li className="w-fit text-sm font-medium text-foreground/80 duration-300 hover:text-foreground">
              <a href="https://apitamais.com.br" target="_blank">
                Acesse aqui
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
