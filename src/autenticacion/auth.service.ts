import { ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUser } from './dto/login-usuario-dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import * as bcrypt from 'bcryptjs';

export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
  ) {}

  // Autenticar Usuario
  async loginUser(usuario: LoginUser) {
    const user = await this.usuarioRepository.findOne({ where: { usuario: usuario.usuario } });
    if (!user) {
      throw new ConflictException("Usuario y/o contraseña incorrectos");
    }
    const passwordValid = await bcrypt.compare(usuario.password, user.password);
    console.log(passwordValid)
    if (!passwordValid) {
      throw new ConflictException("Usuario y/o contraseña incorrectos");
    }

    return user
  }
  
  /*
  async signIn(email: string, pass: string, rol: Role): Promise<{ access_token: string }> {
    //busca si los datos proporcionados coindicen con un usuario creado utilizando el email  
    const user = await this.usersService.findOneUser(email);
    //si no hay usuario creado o la password no coincide con la ingresada retorna no autorizado
      if (!user || user.password !== pass) {
          throw new UnauthorizedException();
      }
           //sino, si los datos son correctos abtiene el id, el email y el rol 
         const payload = { sub: user.id, username: user.username, email:user.email, role: user.role };
         //retorna un token de seguridad creado exclusivamente para ese usuario logueado
      return {
          access_token: await this.jwtService.signAsync(payload),
      };
  }
  */
}
