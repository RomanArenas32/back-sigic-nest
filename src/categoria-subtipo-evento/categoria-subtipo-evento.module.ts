import { Module } from '@nestjs/common';
import { CategoriaSubtipoEventoService } from './categoria-subtipo-evento.service';
import { CategoriaSubtipoEventoController } from './categoria-subtipo-evento.controller';

@Module({
  controllers: [CategoriaSubtipoEventoController],
  providers: [CategoriaSubtipoEventoService],
})
export class CategoriaSubtipoEventoModule {}
