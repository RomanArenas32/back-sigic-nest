import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosAmpliacionesService } from './datos-ampliaciones.service';
import { CreateDatosAmpliacioneDto } from './dto/create-datos-ampliacione.dto';
import { UpdateDatosAmpliacioneDto } from './dto/update-datos-ampliacione.dto';

@Controller('datos-ampliaciones')
export class DatosAmpliacionesController {
  constructor(private readonly datosAmpliacionesService: DatosAmpliacionesService) {}

  @Post()
  create(@Body() createDatosAmpliacioneDto: CreateDatosAmpliacioneDto) {
    return this.datosAmpliacionesService.create(createDatosAmpliacioneDto);
  }

  @Get()
  findAll() {
    return this.datosAmpliacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosAmpliacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosAmpliacioneDto: UpdateDatosAmpliacioneDto) {
    return this.datosAmpliacionesService.update(+id, updateDatosAmpliacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosAmpliacionesService.remove(+id);
  }
}
