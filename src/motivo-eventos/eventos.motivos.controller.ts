import { Controller, Get, Post, Body,  Param, Delete, Put } from '@nestjs/common';
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

  @Get('/selec/:id')
  findMotivoById(@Param('id') id: string) {
    return this.eventosEventosService.findMotivoById(+id);
  }

  @Put('/edit')
  updateMotivo(@Body() evento: UpdateMotivoEventoDto) {
    return this.eventosEventosService.updateMotivo(evento);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosEventosService.remove(+id);
  }
}
