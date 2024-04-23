import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosFuncionarioService } from './datos-funcionario.service';
import { CreateDatosFuncionarioDto } from './dto/create-datos-funcionario.dto';
import { UpdateDatosFuncionarioDto } from './dto/update-datos-funcionario.dto';

@Controller('datos-funcionario')
export class DatosFuncionarioController {
  constructor(private readonly datosFuncionarioService: DatosFuncionarioService) {}

  @Post()
  create(@Body() createDatosFuncionarioDto: CreateDatosFuncionarioDto) {
    return this.datosFuncionarioService.create(createDatosFuncionarioDto);
  }

  @Get()
  findAll() {
    return this.datosFuncionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosFuncionarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosFuncionarioDto: UpdateDatosFuncionarioDto) {
    return this.datosFuncionarioService.update(+id, updateDatosFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosFuncionarioService.remove(+id);
  }
}
