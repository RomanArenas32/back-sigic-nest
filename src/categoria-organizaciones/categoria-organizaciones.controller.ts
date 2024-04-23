import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaOrganizacionesService } from './categoria-organizaciones.service';
import { CreateCategoriaOrganizacioneDto } from './dto/create-categoria-organizacione.dto';
import { UpdateCategoriaOrganizacioneDto } from './dto/update-categoria-organizacione.dto';

@Controller('categoria-organizaciones')
export class CategoriaOrganizacionesController {
  constructor(private readonly categoriaOrganizacionesService: CategoriaOrganizacionesService) {}

  @Post()
  create(@Body() createCategoriaOrganizacioneDto: CreateCategoriaOrganizacioneDto) {
    return this.categoriaOrganizacionesService.create(createCategoriaOrganizacioneDto);
  }

  @Get()
  findAll() {
    return this.categoriaOrganizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaOrganizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaOrganizacioneDto: UpdateCategoriaOrganizacioneDto) {
    return this.categoriaOrganizacionesService.update(+id, updateCategoriaOrganizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaOrganizacionesService.remove(+id);
  }
}
