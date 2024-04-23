import { Module } from '@nestjs/common';
import { CategoriaLugarService } from './categoria-lugar.service';
import { CategoriaLugarController } from './categoria-lugar.controller';

@Module({
  controllers: [CategoriaLugarController],
  providers: [CategoriaLugarService],
})
export class CategoriaLugarModule {}
