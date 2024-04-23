import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosEventosService } from './eventos.eventos.service';
import { CreateEventosEventoDto } from './dto/create-eventos.evento.dto';
import { UpdateEventosEventoDto } from './dto/update-eventos.evento.dto';

@Controller('eventos.eventos')
export class EventosEventosController {
  constructor(private readonly eventosEventosService: EventosEventosService) {}

  @Post()
  create(@Body() createEventosEventoDto: CreateEventosEventoDto) {
    return this.eventosEventosService.create(createEventosEventoDto);
  }

  @Get()
  findAll() {
    return this.eventosEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosEventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventosEventoDto: UpdateEventosEventoDto) {
    return this.eventosEventosService.update(+id, updateEventosEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosEventosService.remove(+id);
  }
}
