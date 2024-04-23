import { Injectable } from '@nestjs/common';
import { CreateCategoriaDelegacionDto } from './dto/create-categoria-delegacion.dto';
import { UpdateCategoriaDelegacionDto } from './dto/update-categoria-delegacion.dto';

@Injectable()
export class CategoriaDelegacionService {
  create(createCategoriaDelegacionDto: CreateCategoriaDelegacionDto) {
    return 'This action adds a new categoriaDelegacion';
  }

  findAll() {
    return `This action returns all categoriaDelegacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaDelegacion`;
  }

  update(id: number, updateCategoriaDelegacionDto: UpdateCategoriaDelegacionDto) {
    return `This action updates a #${id} categoriaDelegacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaDelegacion`;
  }
}
