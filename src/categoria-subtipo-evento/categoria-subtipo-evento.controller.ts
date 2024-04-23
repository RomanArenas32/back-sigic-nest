import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaSubtipoEventoService } from './categoria-subtipo-evento.service';
import { CreateCategoriaSubtipoEventoDto } from './dto/create-categoria-subtipo-evento.dto';
import { UpdateCategoriaSubtipoEventoDto } from './dto/update-categoria-subtipo-evento.dto';

@Controller('categoria-subtipo-evento')
export class CategoriaSubtipoEventoController {
  constructor(private readonly categoriaSubtipoEventoService: CategoriaSubtipoEventoService) {}

  @Post()
  create(@Body() createCategoriaSubtipoEventoDto: CreateCategoriaSubtipoEventoDto) {
    return this.categoriaSubtipoEventoService.create(createCategoriaSubtipoEventoDto);
  }

  @Get()
  findAll() {
    return this.categoriaSubtipoEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaSubtipoEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaSubtipoEventoDto: UpdateCategoriaSubtipoEventoDto) {
    return this.categoriaSubtipoEventoService.update(+id, updateCategoriaSubtipoEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaSubtipoEventoService.remove(+id);
  }
}
