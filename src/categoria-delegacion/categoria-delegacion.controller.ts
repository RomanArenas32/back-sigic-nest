import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaDelegacionService } from './categoria-delegacion.service';
import { CreateCategoriaDelegacionDto } from './dto/create-categoria-delegacion.dto';
import { UpdateCategoriaDelegacionDto } from './dto/update-categoria-delegacion.dto';

@Controller('categoria-delegacion')
export class CategoriaDelegacionController {
  constructor(private readonly categoriaDelegacionService: CategoriaDelegacionService) {}

  @Post()
  create(@Body() createCategoriaDelegacionDto: CreateCategoriaDelegacionDto) {
    return this.categoriaDelegacionService.create(createCategoriaDelegacionDto);
  }

  @Get()
  findAll() {
    return this.categoriaDelegacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaDelegacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDelegacionDto: UpdateCategoriaDelegacionDto) {
    return this.categoriaDelegacionService.update(+id, updateCategoriaDelegacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaDelegacionService.remove(+id);
  }
}
