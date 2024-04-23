import { Injectable } from '@nestjs/common';
import { CreateDatosLugarDto } from './dto/create-datos-lugar.dto';
import { UpdateDatosLugarDto } from './dto/update-datos-lugar.dto';

@Injectable()
export class DatosLugarService {
  create(createDatosLugarDto: CreateDatosLugarDto) {
    return 'This action adds a new datosLugar';
  }

  findAll() {
    return `This action returns all datosLugar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosLugar`;
  }

  update(id: number, updateDatosLugarDto: UpdateDatosLugarDto) {
    return `This action updates a #${id} datosLugar`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosLugar`;
  }
}
