import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosOrganizacionesService } from './datos-organizaciones.service';
import { CreateDatosOrganizacioneDto } from './dto/create-datos-organizacione.dto';
import { UpdateDatosOrganizacioneDto } from './dto/update-datos-organizacione.dto';

@Controller('api/v1/organizaciones')
export class DatosOrganizacionesController {
  constructor(private readonly datosOrganizacionesService: DatosOrganizacionesService) {}

  @Post()
  createOrganizacion(@Body() createDatosOrganizacioneDto: CreateDatosOrganizacioneDto) {
    return this.datosOrganizacionesService.createOrganizacion(createDatosOrganizacioneDto);
  }

  @Get()
  findAllOrganizaciones() {
    return this.datosOrganizacionesService.findAllOrganizaciones();
  }

  @Get('/:nombre')
  findOrganizacionByNombre(@Param('nombre') nombre: string) {
    return this.datosOrganizacionesService.findOrganizacionByNombre(nombre);
  }

  @Get('/:id')
  findOrganizacionById(@Param('id') id: number) {
    return this.datosOrganizacionesService.findOrganizacionById(id);
  }

  @Patch('/:id')
  updateOrganizacion(@Param('id') id: number, @Body() updateDatosOrganizacioneDto: UpdateDatosOrganizacioneDto) {
    return this.datosOrganizacionesService.updateOrganizacion(id, updateDatosOrganizacioneDto);
  }

  @Delete('/:id')
  removeOrganizacion(@Param('id') id: number) {
    return this.datosOrganizacionesService.removeOrganizacion(id);
  }
}
