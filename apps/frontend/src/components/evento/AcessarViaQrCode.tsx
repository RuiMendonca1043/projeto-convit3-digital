import { Evento } from "core";
import QRCode from "react-qr-code";

export interface AcessarViaQrCodeProps {
  evento: Evento;
}

export default function AcessarViaQrCode(props: AcessarViaQrCodeProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border border-zinc-800 px-10 rounded-lg">
      <span className="text-sm font-light text-zinc-400">
        Acede pelo telemóvel
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.evento.id,
          senha: props.evento.senha,
        })}
        className="w-36 h-36"
      />
    </div>
  );
}
