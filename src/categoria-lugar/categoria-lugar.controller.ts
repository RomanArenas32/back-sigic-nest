import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaLugarService } from './categoria-lugar.service';
import { CreateCategoriaLugarDto } from './dto/create-categoria-lugar.dto';
import { UpdateCategoriaLugarDto } from './dto/update-categoria-lugar.dto';

@Controller('categoria-lugar')
export class CategoriaLugarController {
  constructor(private readonly categoriaLugarService: CategoriaLugarService) {}

  @Post()
  create(@Body() createCategoriaLugarDto: CreateCategoriaLugarDto) {
    return this.categoriaLugarService.create(createCategoriaLugarDto);
  }

  @Get()
  findAll() {
    return this.categoriaLugarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaLugarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaLugarDto: UpdateCategoriaLugarDto) {
    return this.categoriaLugarService.update(+id, updateCategoriaLugarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaLugarService.remove(+id);
  }
}
