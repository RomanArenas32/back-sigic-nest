import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosOrganizacionesService } from './datos-organizaciones.service';
import { CreateDatosOrganizacioneDto } from './dto/create-datos-organizacione.dto';
import { UpdateDatosOrganizacioneDto } from './dto/update-datos-organizacione.dto';

@Controller('api/v1/organizaciones')
export class DatosOrganizacionesController {
  constructor(private DatosOrganizacionesService: DatosOrganizacionesService) {}

  @Post()
  createOrganizacion(@Body() createDatosOrganizacioneDto: CreateDatosOrganizacioneDto) {
    return this.DatosOrganizacionesService.createOrganizacion(createDatosOrganizacioneDto);
  }

  @Get()
  findAllOrganizaciones() {
    return this.DatosOrganizacionesService.findAllOrganizaciones();
  }

  @Get('/:nombre')
  findOrganizacionByNombre(@Param('nombre') nombre: string) {
    return this.DatosOrganizacionesService.findOrganizacionByNombre(nombre);
  }

  @Get('/selec/:id')
  findOrganizacionById(@Param('id') id: number) {
    return this.DatosOrganizacionesService.findOrganizacionById(id);
  }

  @Patch('/edit')
  updateOrganizacion(@Body() organizacion: UpdateDatosOrganizacioneDto) {
    return this.DatosOrganizacionesService.updateOrganizacion(organizacion);
  }

  @Delete('/:id')
  removeOrganizacion(@Param('id') id: number) {
    return this.DatosOrganizacionesService.removeOrganizacion(id);
  }
}
