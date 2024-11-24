import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(
  convidadeParcial: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidadeParcial);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidadeParcial.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    convidadeParcial.possuiAcompanhantes &&
    convidadeParcial.confirmado &&
    qtdeAcompanhantes > 0;

  const convidadeAtualizado = {
    ...convidadeParcial,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadeAtualizado as Convidado;
}
