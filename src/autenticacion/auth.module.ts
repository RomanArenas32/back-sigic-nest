import { Module } from '@nestjs/common';
import { UsuariosService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './auth.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario
    ])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class AuthModule {}
