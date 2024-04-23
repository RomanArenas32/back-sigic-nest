import { Module } from '@nestjs/common';
import { CategoriaEventosService } from './categoria-eventos.service';
import { CategoriaEventosController } from './categoria-eventos.controller';

@Module({
  controllers: [CategoriaEventosController],
  providers: [CategoriaEventosService],
})
export class CategoriaEventosModule {}
