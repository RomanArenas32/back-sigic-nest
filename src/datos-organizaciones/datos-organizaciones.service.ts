import { Injectable } from '@nestjs/common';
import { CreateDatosOrganizacioneDto } from './dto/create-datos-organizacione.dto';
import { UpdateDatosOrganizacioneDto } from './dto/update-datos-organizacione.dto';

@Injectable()
export class DatosOrganizacionesService {
  create(createDatosOrganizacioneDto: CreateDatosOrganizacioneDto) {
    return 'This action adds a new datosOrganizacione';
  }

  findAll() {
    return `This action returns all datosOrganizaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosOrganizacione`;
  }

  update(id: number, updateDatosOrganizacioneDto: UpdateDatosOrganizacioneDto) {
    return `This action updates a #${id} datosOrganizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosOrganizacione`;
  }
}
