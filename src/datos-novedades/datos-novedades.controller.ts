import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosNovedadesService } from './datos-novedades.service';
import { CreateDatosNovedadeDto } from './dto/create-datos-novedade.dto';
import { UpdateDatosNovedadeDto } from './dto/update-datos-novedade.dto';

@Controller('datos-novedades')
export class DatosNovedadesController {
  constructor(private readonly datosNovedadesService: DatosNovedadesService) {}

  @Post()
  create(@Body() createDatosNovedadeDto: CreateDatosNovedadeDto) {
    return this.datosNovedadesService.create(createDatosNovedadeDto);
  }

  @Get()
  findAll() {
    return this.datosNovedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosNovedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosNovedadeDto: UpdateDatosNovedadeDto) {
    return this.datosNovedadesService.update(+id, updateDatosNovedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosNovedadesService.remove(+id);
  }
}
