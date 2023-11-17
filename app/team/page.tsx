import { Metadata } from "next";

import { team } from "@/data/team";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { TeamCard } from "@/components/ui/TeamCard";
import { AnimateEnter } from "@/components/utils/AnimateEnter";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça quem está por trás da revolução no mercado futebolístico",
};

export default function TeamPage() {
  return (
    <AnimateEnter className="mx-auto w-full max-w-5xl space-y-10 px-10 pb-40 pt-12">
      <section className="space-y-3">
        <Title>Time</Title>
        <Typography size="md" className="leading-relaxed">
          Conheça quem está por trás da revolução no{" "}
          <span className="font-semibold text-primary">
            mercado futebolístico
          </span>
        </Typography>
      </section>
      <section>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {team.map((props) => (
            <TeamCard key={props.id} {...props} />
          ))}
        </div>
      </section>
    </AnimateEnter>
  );
}
