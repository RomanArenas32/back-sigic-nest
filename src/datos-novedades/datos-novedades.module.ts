import { Module } from '@nestjs/common';
import { DatosNovedadesService } from './datos-novedades.service';
import { DatosNovedadesController } from './datos-novedades.controller';

@Module({
  controllers: [DatosNovedadesController],
  providers: [DatosNovedadesService],
})
export class DatosNovedadesModule {}
