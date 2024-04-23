import { Injectable } from '@nestjs/common';
import { CreateCategoriaLugarDto } from './dto/create-categoria-lugar.dto';
import { UpdateCategoriaLugarDto } from './dto/update-categoria-lugar.dto';

@Injectable()
export class CategoriaLugarService {
  create(createCategoriaLugarDto: CreateCategoriaLugarDto) {
    return 'This action adds a new categoriaLugar';
  }

  findAll() {
    return `This action returns all categoriaLugar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaLugar`;
  }

  update(id: number, updateCategoriaLugarDto: UpdateCategoriaLugarDto) {
    return `This action updates a #${id} categoriaLugar`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaLugar`;
  }
}
