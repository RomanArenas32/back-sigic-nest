import { Module } from '@nestjs/common';
import { EventosNovedadesService } from './eventos-novedades.service';
import { EventosNovedadesController } from './eventos-novedades.controller';

@Module({
  controllers: [EventosNovedadesController],
  providers: [EventosNovedadesService],
})
export class EventosNovedadesModule {}
