import { Module } from '@nestjs/common';
import { CategoriaPersonasService } from './categoria-personas.service';
import { CategoriaPersonasController } from './categoria-personas.controller';

@Module({
  controllers: [CategoriaPersonasController],
  providers: [CategoriaPersonasService],
})
export class CategoriaPersonasModule {}
