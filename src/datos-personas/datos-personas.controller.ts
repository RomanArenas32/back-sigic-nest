import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosPersonasService } from './datos-personas.service';
import { CreateDatosPersonaDto } from './dto/create-datos-persona.dto';
import { UpdateDatosPersonaDto } from './dto/update-datos-persona.dto';

@Controller('datos-personas')
export class DatosPersonasController {
  constructor(private readonly datosPersonasService: DatosPersonasService) {}

  @Post()
  create(@Body() createDatosPersonaDto: CreateDatosPersonaDto) {
    return this.datosPersonasService.create(createDatosPersonaDto);
  }

  @Get()
  findAll() {
    return this.datosPersonasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosPersonasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosPersonaDto: UpdateDatosPersonaDto) {
    return this.datosPersonasService.update(+id, updateDatosPersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosPersonasService.remove(+id);
  }
}
