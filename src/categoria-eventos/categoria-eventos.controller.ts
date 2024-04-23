import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaEventosService } from './categoria-eventos.service';
import { CreateCategoriaEventoDto } from './dto/create-categoria-evento.dto';
import { UpdateCategoriaEventoDto } from './dto/update-categoria-evento.dto';

@Controller('categoria-eventos')
export class CategoriaEventosController {
  constructor(private readonly categoriaEventosService: CategoriaEventosService) {}

  @Post()
  create(@Body() createCategoriaEventoDto: CreateCategoriaEventoDto) {
    return this.categoriaEventosService.create(createCategoriaEventoDto);
  }

  @Get()
  findAll() {
    return this.categoriaEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaEventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaEventoDto: UpdateCategoriaEventoDto) {
    return this.categoriaEventosService.update(+id, updateCategoriaEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaEventosService.remove(+id);
  }
}
