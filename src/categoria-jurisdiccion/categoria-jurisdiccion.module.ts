import { Module } from '@nestjs/common';
import { CategoriaJurisdiccionService } from './categoria-jurisdiccion.service';
import { CategoriaJurisdiccionController } from './categoria-jurisdiccion.controller';

@Module({
  controllers: [CategoriaJurisdiccionController],
  providers: [CategoriaJurisdiccionService],
})
export class CategoriaJurisdiccionModule {}
