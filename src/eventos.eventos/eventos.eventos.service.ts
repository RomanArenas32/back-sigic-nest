import { Injectable } from '@nestjs/common';
import { CreateEventosEventoDto } from './dto/create-eventos.evento.dto';
import { UpdateEventosEventoDto } from './dto/update-eventos.evento.dto';

@Injectable()
export class EventosEventosService {
  create(createEventosEventoDto: CreateEventosEventoDto) {
    return 'This action adds a new eventosEvento';
  }

  findAll() {
    return `This action returns all eventosEventos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventosEvento`;
  }

  update(id: number, updateEventosEventoDto: UpdateEventosEventoDto) {
    return `This action updates a #${id} eventosEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventosEvento`;
  }
}
