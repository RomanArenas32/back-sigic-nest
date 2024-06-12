import { Module } from '@nestjs/common';
import { UsuariosService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './auth.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt-constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class AuthModule {}
