import { Module } from '@nestjs/common';
import { EventosPartidoAnalisisService } from './eventos-partido-analisis.service';
import { EventosPartidoAnalisisController } from './eventos-partido-analisis.controller';

@Module({
  controllers: [EventosPartidoAnalisisController],
  providers: [EventosPartidoAnalisisService],
})
export class EventosPartidoAnalisisModule {}
