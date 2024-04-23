import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaJurisdiccionService } from './categoria-jurisdiccion.service';
import { CreateCategoriaJurisdiccionDto } from './dto/create-categoria-jurisdiccion.dto';
import { UpdateCategoriaJurisdiccionDto } from './dto/update-categoria-jurisdiccion.dto';

@Controller('categoria-jurisdiccion')
export class CategoriaJurisdiccionController {
  constructor(private readonly categoriaJurisdiccionService: CategoriaJurisdiccionService) {}

  @Post()
  create(@Body() createCategoriaJurisdiccionDto: CreateCategoriaJurisdiccionDto) {
    return this.categoriaJurisdiccionService.create(createCategoriaJurisdiccionDto);
  }

  @Get()
  findAll() {
    return this.categoriaJurisdiccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaJurisdiccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaJurisdiccionDto: UpdateCategoriaJurisdiccionDto) {
    return this.categoriaJurisdiccionService.update(+id, updateCategoriaJurisdiccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaJurisdiccionService.remove(+id);
  }
}
