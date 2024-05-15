import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { UpdateUsuarioDto } from './dto/update-usuario-dto';

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
      where: { estado: true },
    });
  }
  //obtener usuarios inactivos
  async getUsuariosInactivos(){
    return await this.usuarioRepository.find({
      where: {estado: false}
    })
  }

  //actualizar  usuario
  async updateUser(usuario: UpdateUsuarioDto) {
    const existeUsuario: UpdateUsuarioDto = await this.findUsuarioByLegajo(
      usuario.legajo,
    );
    if (!existeUsuario) {
      throw new ConflictException('El usuario no existe');
    }
    await this.usuarioRepository.update(
      { legajo: usuario.legajo }, 
      { ...usuario }, 
    );
  }
}
