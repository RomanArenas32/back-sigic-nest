import { Injectable } from '@nestjs/common';
import { CreateCategoriaPersonaDto } from './dto/create-categoria-persona.dto';
import { UpdateCategoriaPersonaDto } from './dto/update-categoria-persona.dto';

@Injectable()
export class CategoriaPersonasService {
  create(createCategoriaPersonaDto: CreateCategoriaPersonaDto) {
    return 'This action adds a new categoriaPersona';
  }

  findAll() {
    return `This action returns all categoriaPersonas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaPersona`;
  }

  update(id: number, updateCategoriaPersonaDto: UpdateCategoriaPersonaDto) {
    return `This action updates a #${id} categoriaPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaPersona`;
  }
}
