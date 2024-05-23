import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosMotivosService } from './eventos.motivos.service';
import { CreateMotivoEventoDto } from './dto/create-motivo.evento.dto';
import { UpdateMotivoEventoDto } from './dto/update-motivo.evento.dto';

@Controller('api/v1/motivoevento')
export class EventosMotivosController {
  constructor(private readonly eventosEventosService: EventosMotivosService) {}

  @Post()
  createMotivo(@Body() createEventosEventoDto: CreateMotivoEventoDto) {
    return this.eventosEventosService.createMotivo(createEventosEventoDto);
  }

  @Get()
  findAllMotivos() {
    return this.eventosEventosService.findAllMotivos();
  }

  @Get(':id')
  findMotivoById(@Param('id') id: string) {
    return this.eventosEventosService.findMotivoById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventosEventoDto: UpdateMotivoEventoDto) {
    return this.eventosEventosService.update(+id, updateEventosEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosEventosService.remove(+id);
  }
}
