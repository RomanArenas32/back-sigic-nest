import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosPartidoAnalisisService } from './eventos-partido-analisis.service';
import { CreateEventosPartidoAnalisiDto } from './dto/create-eventos-partido-analisi.dto';
import { UpdateEventosPartidoAnalisiDto } from './dto/update-eventos-partido-analisi.dto';

@Controller('eventos-partido-analisis')
export class EventosPartidoAnalisisController {
  constructor(private readonly eventosPartidoAnalisisService: EventosPartidoAnalisisService) {}

  @Post()
  create(@Body() createEventosPartidoAnalisiDto: CreateEventosPartidoAnalisiDto) {
    return this.eventosPartidoAnalisisService.create(createEventosPartidoAnalisiDto);
  }

  @Get()
  findAll() {
    return this.eventosPartidoAnalisisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosPartidoAnalisisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventosPartidoAnalisiDto: UpdateEventosPartidoAnalisiDto) {
    return this.eventosPartidoAnalisisService.update(+id, updateEventosPartidoAnalisiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosPartidoAnalisisService.remove(+id);
  }
}
