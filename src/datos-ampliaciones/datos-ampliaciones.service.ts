import { Injectable } from '@nestjs/common';
import { CreateDatosAmpliacioneDto } from './dto/create-datos-ampliacione.dto';
import { UpdateDatosAmpliacioneDto } from './dto/update-datos-ampliacione.dto';

@Injectable()
export class DatosAmpliacionesService {
  create(createDatosAmpliacioneDto: CreateDatosAmpliacioneDto) {
    return 'This action adds a new datosAmpliacione';
  }

  findAll() {
    return `This action returns all datosAmpliaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosAmpliacione`;
  }

  update(id: number, updateDatosAmpliacioneDto: UpdateDatosAmpliacioneDto) {
    return `This action updates a #${id} datosAmpliacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosAmpliacione`;
  }
}
