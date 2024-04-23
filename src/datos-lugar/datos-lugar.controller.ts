import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosLugarService } from './datos-lugar.service';
import { CreateDatosLugarDto } from './dto/create-datos-lugar.dto';
import { UpdateDatosLugarDto } from './dto/update-datos-lugar.dto';

@Controller('datos-lugar')
export class DatosLugarController {
  constructor(private readonly datosLugarService: DatosLugarService) {}

  @Post()
  create(@Body() createDatosLugarDto: CreateDatosLugarDto) {
    return this.datosLugarService.create(createDatosLugarDto);
  }

  @Get()
  findAll() {
    return this.datosLugarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosLugarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosLugarDto: UpdateDatosLugarDto) {
    return this.datosLugarService.update(+id, updateDatosLugarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosLugarService.remove(+id);
  }
}
