import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosDesarrolloService } from './datos-desarrollo.service';
import { CreateDatosDesarrolloDto } from './dto/create-datos-desarrollo.dto';
import { UpdateDatosDesarrolloDto } from './dto/update-datos-desarrollo.dto';

@Controller('datos-desarrollo')
export class DatosDesarrolloController {
  constructor(private readonly datosDesarrolloService: DatosDesarrolloService) {}

  @Post()
  create(@Body() createDatosDesarrolloDto: CreateDatosDesarrolloDto) {
    return this.datosDesarrolloService.create(createDatosDesarrolloDto);
  }

  @Get()
  findAll() {
    return this.datosDesarrolloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosDesarrolloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosDesarrolloDto: UpdateDatosDesarrolloDto) {
    return this.datosDesarrolloService.update(+id, updateDatosDesarrolloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosDesarrolloService.remove(+id);
  }
}
