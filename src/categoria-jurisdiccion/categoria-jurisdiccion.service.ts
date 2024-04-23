import { Injectable } from '@nestjs/common';
import { CreateCategoriaJurisdiccionDto } from './dto/create-categoria-jurisdiccion.dto';
import { UpdateCategoriaJurisdiccionDto } from './dto/update-categoria-jurisdiccion.dto';

@Injectable()
export class CategoriaJurisdiccionService {
  create(createCategoriaJurisdiccionDto: CreateCategoriaJurisdiccionDto) {
    return 'This action adds a new categoriaJurisdiccion';
  }

  findAll() {
    return `This action returns all categoriaJurisdiccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaJurisdiccion`;
  }

  update(id: number, updateCategoriaJurisdiccionDto: UpdateCategoriaJurisdiccionDto) {
    return `This action updates a #${id} categoriaJurisdiccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaJurisdiccion`;
  }
}
