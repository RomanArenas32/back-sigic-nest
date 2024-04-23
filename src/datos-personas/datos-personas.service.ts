import { Injectable } from '@nestjs/common';
import { CreateDatosPersonaDto } from './dto/create-datos-persona.dto';
import { UpdateDatosPersonaDto } from './dto/update-datos-persona.dto';

@Injectable()
export class DatosPersonasService {
  create(createDatosPersonaDto: CreateDatosPersonaDto) {
    return 'This action adds a new datosPersona';
  }

  findAll() {
    return `This action returns all datosPersonas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosPersona`;
  }

  update(id: number, updateDatosPersonaDto: UpdateDatosPersonaDto) {
    return `This action updates a #${id} datosPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosPersona`;
  }
}
