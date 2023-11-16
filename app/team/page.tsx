import Image from "next/image";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { Typography } from "@/components/Typography";

import guhrodrigues from "@/assets/team/guhrodrigues.jpg"
import { team } from "@/data/team";

export default function TeamPage() {
    return (
        <Container className="py-8 space-y-10">
            <section className="space-y-3">
                <Title>Time</Title>
                <Typography>Conheça quem está por tras da revolução no mercado futebolístico.</Typography>
            </section>
            <section>
                <div className="grid grid-cols-3 gap-10">
                    {team.map(({ id, image, name, bio }) => (
                    <div key={id} className="flex items-center gap-6">
                        <div className="rounded-full overflow-hidden">
                            <Image 
                                src={image} 
                                width={70} 
                                height={70} 
                                alt={name}
                                className="hover:scale-105 duration-500"
                            />
                        </div>
                        <div>
                            <Title size="lg">{name}</Title>
                            <Typography>{bio}</Typography>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}