import { Module } from '@nestjs/common';
import { EventosMotivosService } from './eventos.motivos.service';
import { EventosMotivosController } from './eventos.motivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotivoEventos } from './entities/motivo.evento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MotivoEventos
    ])
  ],
  controllers: [EventosMotivosController],
  providers: [EventosMotivosService],
})
export class EventosMotivosModule {}

