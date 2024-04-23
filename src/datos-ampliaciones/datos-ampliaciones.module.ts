import { Module } from '@nestjs/common';
import { DatosAmpliacionesService } from './datos-ampliaciones.service';
import { DatosAmpliacionesController } from './datos-ampliaciones.controller';

@Module({
  controllers: [DatosAmpliacionesController],
  providers: [DatosAmpliacionesService],
})
export class DatosAmpliacionesModule {}
