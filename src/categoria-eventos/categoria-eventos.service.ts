import { Injectable } from '@nestjs/common';
import { CreateCategoriaEventoDto } from './dto/create-categoria-evento.dto';
import { UpdateCategoriaEventoDto } from './dto/update-categoria-evento.dto';

@Injectable()
export class CategoriaEventosService {
  create(createCategoriaEventoDto: CreateCategoriaEventoDto) {
    return 'This action adds a new categoriaEvento';
  }

  findAll() {
    return `This action returns all categoriaEventos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaEvento`;
  }

  update(id: number, updateCategoriaEventoDto: UpdateCategoriaEventoDto) {
    return `This action updates a #${id} categoriaEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaEvento`;
  }
}
