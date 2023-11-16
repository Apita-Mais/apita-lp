import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { Typography } from "@/components/Typography";

import { team } from "@/data/team";
import { TeamCard } from "@/components/TeamCard";

export default function TeamPage() {
    return (
        <Container className="pt-8 pb-40 space-y-10">
            <section className="space-y-3">
                <Title>Time</Title>
                <Typography size="md">Conheça quem está por tras da revolução no mercado futebolístico.</Typography>
            </section>
            <section>
                <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1 w-fit">
                    {team.map((props) => (
                        <TeamCard key={props.id} {...props} />
                    ))}
                </div>
            </section>
        </Container>

    )
}