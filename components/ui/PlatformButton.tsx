import { Rocket } from "lucide-react";

export function PlatformButton() {
  return (
    <a href="https://apitamais.com.br" target="_blank">
      <button className="group relative grid overflow-hidden rounded-xl px-6 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] duration-300 hover:scale-105">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl duration-300 [mask:linear-gradient(#FFDAFC,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#FFDAFC_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-xl bg-[#97128B]" />
        <span className="z-10 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Rocket />
          Plataforma
        </span>
      </button>
    </a>
  );
}
