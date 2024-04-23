import { Module } from '@nestjs/common';
import { DatosPersonasService } from './datos-personas.service';
import { DatosPersonasController } from './datos-personas.controller';

@Module({
  controllers: [DatosPersonasController],
  providers: [DatosPersonasService],
})
export class DatosPersonasModule {}
