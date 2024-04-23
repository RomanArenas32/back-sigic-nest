import { Module } from '@nestjs/common';
import { DatosLugarService } from './datos-lugar.service';
import { DatosLugarController } from './datos-lugar.controller';

@Module({
  controllers: [DatosLugarController],
  providers: [DatosLugarService],
})
export class DatosLugarModule {}
