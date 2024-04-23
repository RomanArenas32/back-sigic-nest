import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosOrganizacionesService } from './datos-organizaciones.service';
import { CreateDatosOrganizacioneDto } from './dto/create-datos-organizacione.dto';
import { UpdateDatosOrganizacioneDto } from './dto/update-datos-organizacione.dto';

@Controller('datos-organizaciones')
export class DatosOrganizacionesController {
  constructor(private readonly datosOrganizacionesService: DatosOrganizacionesService) {}

  @Post()
  create(@Body() createDatosOrganizacioneDto: CreateDatosOrganizacioneDto) {
    return this.datosOrganizacionesService.create(createDatosOrganizacioneDto);
  }

  @Get()
  findAll() {
    return this.datosOrganizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosOrganizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosOrganizacioneDto: UpdateDatosOrganizacioneDto) {
    return this.datosOrganizacionesService.update(+id, updateDatosOrganizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosOrganizacionesService.remove(+id);
  }
}
