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

  async createUser(userData: CreateUsuarioDto) {
    
    const existeUsuario : CreateUsuarioDto = await this.findUsuarioByLegajo(userData.legajo);

        if(existeUsuario){
            throw new ConflictException("El usuario ya existe");
        }

    return await this.usuarioRepository.save(userData);
  }

  async findUsuarioByLegajo(legajo: string) {
    return await this.usuarioRepository.findOne({
      where: { legajo },
    });
  }

  async getUsuarios(){
    return this.usuarioRepository.find();
  }
}
