import { Injectable } from '@nestjs/common';
import { CreateCategoriaOrganizacioneDto } from './dto/create-categoria-organizacione.dto';
import { UpdateCategoriaOrganizacioneDto } from './dto/update-categoria-organizacione.dto';

@Injectable()
export class CategoriaOrganizacionesService {
  create(createCategoriaOrganizacioneDto: CreateCategoriaOrganizacioneDto) {
    return 'This action adds a new categoriaOrganizacione';
  }

  findAll() {
    return `This action returns all categoriaOrganizaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaOrganizacione`;
  }

  update(id: number, updateCategoriaOrganizacioneDto: UpdateCategoriaOrganizacioneDto) {
    return `This action updates a #${id} categoriaOrganizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaOrganizacione`;
  }
}
