import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';
import { EventosController } from './eventos/eventos.controller';
import { DbModule } from './db/db.module';
import { EventoPrisma } from './eventos/evento.prisma';

@Module({
  imports: [EventosModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
