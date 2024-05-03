import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
  ) {}
  //Crear usuario
  async createUser(userData: CreateUsuarioDto) {
    const existeUsuario: CreateUsuarioDto = await this.findUsuarioByLegajo(
      userData.legajo,
    );
    if (existeUsuario) {
      throw new ConflictException('El usuario ya existe');
    }
    const nuevoUsuario = await this.usuarioRepository.save(userData);
    const mensaje = 'Usuario creado correctamente';
    return { usuario: nuevoUsuario, mensaje };
  }
  //Buscar Usuario por legajo
  async findUsuarioByLegajo(legajo: string) {
    return await this.usuarioRepository.findOne({
      where: { legajo },
    });
  }
  //Obtener  todos los usuarios activos
  async getUsuariosActivos() {
    return await this.usuarioRepository.find({
      where: {estado: true}
    });
  }
}
