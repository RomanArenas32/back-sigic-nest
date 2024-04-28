import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario
    ])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
