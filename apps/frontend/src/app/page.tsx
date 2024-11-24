import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      h-screen flex flex-col justify-center items-center gap-10 
      bg-[url('/background-elementos.svg')] bg-cover "
    >
      <div className="flex flex-col items-center gap-4 select-none">
        <LogoGrande />
        <p className="text-zinc-400 font-light w-96 leading-6 text-center">
          Cria e gere o convite para o teu evento de forma rápida e fácil, sem
          complicações!
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Cria o teu Evento
      </Link>
    </div>
  );
}
