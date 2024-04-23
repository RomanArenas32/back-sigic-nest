import { Module } from '@nestjs/common';
import { EventosEventosService } from './eventos.eventos.service';
import { EventosEventosController } from './eventos.eventos.controller';

@Module({
  controllers: [EventosEventosController],
  providers: [EventosEventosService],
})
export class EventosEventosModule {}
