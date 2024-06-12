import { ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUser } from './dto/login-usuario-dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService 
  ) {}

  // Autenticar Usuario
  async loginUser(usuario: LoginUser) {
    const user = await this.usuarioRepository.findOne({ where: { usuario: usuario.usuario } });
    if (!user) {
      throw new ConflictException("Usuario y/o contraseña incorrectos");
    }
    const passwordValid = await bcrypt.compare(usuario.password, user.password);
    
    if (!passwordValid) {
      throw new ConflictException("Usuario y/o contraseña incorrectos");
    }

    const payload = {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      legajo: user.legajo,
      delegacion: user.delegacion,
      usuario: user.usuario,
      rol: user.rol,
    };

    const token = await this.jwtService.signAsync(payload)

    return {
      token,
      user
    }
  }
  
  async getProfile(req : any){
    return req.user
  }
}
