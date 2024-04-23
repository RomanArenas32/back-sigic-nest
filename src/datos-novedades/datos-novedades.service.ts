import { Injectable } from '@nestjs/common';
import { CreateDatosNovedadeDto } from './dto/create-datos-novedade.dto';
import { UpdateDatosNovedadeDto } from './dto/update-datos-novedade.dto';

@Injectable()
export class DatosNovedadesService {
  create(createDatosNovedadeDto: CreateDatosNovedadeDto) {
    return 'This action adds a new datosNovedade';
  }

  findAll() {
    return `This action returns all datosNovedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosNovedade`;
  }

  update(id: number, updateDatosNovedadeDto: UpdateDatosNovedadeDto) {
    return `This action updates a #${id} datosNovedade`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosNovedade`;
  }
}
