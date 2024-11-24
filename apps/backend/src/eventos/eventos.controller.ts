import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import {
  Convidado,
  Data,
  Evento,
  Id,
  complementarConvidado,
  complementarEvento,
  eventos,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repo: EventoPrisma) {}
  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const novoEvento = await this.repo.buscarPorAlias(evento.alias);
    if (novoEvento && novoEvento.id !== evento.id) {
      throw new Error('Alias já registado!');
    }
    const eventoCompleto = complementarEvento(this.deserializar(evento));
    await this.repo.salvar(eventoCompleto);
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repo.buscarPorAlias(alias);
    if (!evento) {
      throw new Error('Evento não encontrado!');
    }
    const convidadoCompleto = complementarConvidado(convidado);
    await this.repo.salvarConvidado(evento, convidadoCompleto);
  }
  @Post('aceder')
  async acederEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.repo.buscarPorId(dados.id, true);
    if (!evento) {
      throw new Error('Evento não encontrado!');
    }
    if (evento.senha !== dados.senha) {
      throw new Error('Senha não corresponde ao evento.');
    }
    return this.serializar(evento);
  }
  @Get()
  async buscarEventos() {
    const eventos = await this.repo.buscarTodos();
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    let evento: Evento;
    if (Id.valido(idOuAlias)) {
      evento = await this.repo.buscarPorId(idOuAlias);
    } else {
      evento = await this.repo.buscarPorAlias(idOuAlias);
    }
    return this.serializar(evento);
  }

  private serializar(evento: Evento) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }
  private deserializar(evento: any): Evento {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repo.buscarPorAlias(alias);
    console.log(!evento);
    return { valido: !evento || evento.id === id };
  }
}
