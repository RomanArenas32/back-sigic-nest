import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosNovedadesService } from './eventos-novedades.service';
import { CreateEventosNovedadeDto } from './dto/create-eventos-novedade.dto';
import { UpdateEventosNovedadeDto } from './dto/update-eventos-novedade.dto';

@Controller('eventos-novedades')
export class EventosNovedadesController {
  constructor(private readonly eventosNovedadesService: EventosNovedadesService) {}

  @Post()
  create(@Body() createEventosNovedadeDto: CreateEventosNovedadeDto) {
    return this.eventosNovedadesService.create(createEventosNovedadeDto);
  }

  @Get()
  findAll() {
    return this.eventosNovedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosNovedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventosNovedadeDto: UpdateEventosNovedadeDto) {
    return this.eventosNovedadesService.update(+id, updateEventosNovedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosNovedadesService.remove(+id);
  }
}
