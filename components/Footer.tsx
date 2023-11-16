import Image from "next/image"

import logo from "@/assets/logo.svg"
import { Typography } from "./Typography"
import Link from "next/link"

import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Title } from "./Title";

export function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-gradient-to-t from-transparent via-secondary/50 via-10% to-transparent">
            <div className="flex justify-between p-12 max-w-5xl w-full mx-auto gap-[168px] max-lg:flex-col max-lg:justify-center max-lg:gap-10">
                <div className="space-y-4 max-w-xs">
                    <Image src={logo} width={100} alt="Logo" />
                    <Typography className="leading-relaxed font-normal">
                        Celebrando a força do futebol feminino, onde cada
                        jogada é um passo em direção à igualdade e
                        excelência esportiva.
                    </Typography>
                    <div className="flex items-center">
                        <div className="flex gap-4">
                            <Link href="">
                                <span>
                                    <GrInstagram size={16} className="text-primary" />
                                </span>
                            </Link>

                            <Link href="">
                                <span>
                                    <GrTwitter size={16} className="text-primary" />
                                </span>
                            </Link>

                            <Link href="">
                                <span>
                                    <FaTiktok size={16} className="text-primary" />
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="space-y-4">
                    <Title size="lg">Acesso rápido</Title>

                    <ul className="space-y-4">
                        <li className="text-foreground/80 text-sm font-medium hover:text-foreground duration-300 w-fit">
                            <Link href="/">Início</Link>
                        </li>
                        <li className="text-foreground/80 text-sm font-medium hover:text-foreground duration-300 w-fit">
                            <Link href="/team">Equipe</Link>
                        </li>
                        <li className="text-foreground/80 text-sm font-medium hover:text-foreground duration-300 w-fit">
                            <a href="https://apitamais.com.br" target="_blank">Plataforma</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <Title size="lg">Legal</Title>

                    <ul className="space-y-4">
                        <li className="text-foreground/80 text-sm font-medium hover:text-foreground duration-300">
                            <Link href="/">Termos de uso</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}