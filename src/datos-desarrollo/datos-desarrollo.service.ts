import { Injectable } from '@nestjs/common';
import { CreateDatosDesarrolloDto } from './dto/create-datos-desarrollo.dto';
import { UpdateDatosDesarrolloDto } from './dto/update-datos-desarrollo.dto';

@Injectable()
export class DatosDesarrolloService {
  create(createDatosDesarrolloDto: CreateDatosDesarrolloDto) {
    return 'This action adds a new datosDesarrollo';
  }

  findAll() {
    return `This action returns all datosDesarrollo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosDesarrollo`;
  }

  update(id: number, updateDatosDesarrolloDto: UpdateDatosDesarrolloDto) {
    return `This action updates a #${id} datosDesarrollo`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosDesarrollo`;
  }
}
