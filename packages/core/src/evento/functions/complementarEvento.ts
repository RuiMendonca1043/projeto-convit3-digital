import Evento from "../model/Evento";
import validarEvento from "./validarEvento";

export default function complementarEvento(
  eventoParcial: Partial<Evento>
): Evento {
  const erros = validarEvento(eventoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id,
    senha: eventoParcial.senha,
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
  } as Evento;
  return evento;
}
