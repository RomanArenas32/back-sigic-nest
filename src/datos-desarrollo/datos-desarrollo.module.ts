import { Module } from '@nestjs/common';
import { DatosDesarrolloService } from './datos-desarrollo.service';
import { DatosDesarrolloController } from './datos-desarrollo.controller';

@Module({
  controllers: [DatosDesarrolloController],
  providers: [DatosDesarrolloService],
})
export class DatosDesarrolloModule {}
