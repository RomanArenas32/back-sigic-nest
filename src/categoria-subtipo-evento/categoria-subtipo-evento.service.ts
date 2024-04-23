import { Injectable } from '@nestjs/common';
import { CreateCategoriaSubtipoEventoDto } from './dto/create-categoria-subtipo-evento.dto';
import { UpdateCategoriaSubtipoEventoDto } from './dto/update-categoria-subtipo-evento.dto';

@Injectable()
export class CategoriaSubtipoEventoService {
  create(createCategoriaSubtipoEventoDto: CreateCategoriaSubtipoEventoDto) {
    return 'This action adds a new categoriaSubtipoEvento';
  }

  findAll() {
    return `This action returns all categoriaSubtipoEvento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaSubtipoEvento`;
  }

  update(id: number, updateCategoriaSubtipoEventoDto: UpdateCategoriaSubtipoEventoDto) {
    return `This action updates a #${id} categoriaSubtipoEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaSubtipoEvento`;
  }
}
