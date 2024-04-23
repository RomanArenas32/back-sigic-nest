import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaPersonasService } from './categoria-personas.service';
import { CreateCategoriaPersonaDto } from './dto/create-categoria-persona.dto';
import { UpdateCategoriaPersonaDto } from './dto/update-categoria-persona.dto';

@Controller('categoria-personas')
export class CategoriaPersonasController {
  constructor(private readonly categoriaPersonasService: CategoriaPersonasService) {}

  @Post()
  create(@Body() createCategoriaPersonaDto: CreateCategoriaPersonaDto) {
    return this.categoriaPersonasService.create(createCategoriaPersonaDto);
  }

  @Get()
  findAll() {
    return this.categoriaPersonasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaPersonasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaPersonaDto: UpdateCategoriaPersonaDto) {
    return this.categoriaPersonasService.update(+id, updateCategoriaPersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaPersonasService.remove(+id);
  }
}
