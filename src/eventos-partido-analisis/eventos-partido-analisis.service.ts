import { Injectable } from '@nestjs/common';
import { CreateEventosPartidoAnalisiDto } from './dto/create-eventos-partido-analisi.dto';
import { UpdateEventosPartidoAnalisiDto } from './dto/update-eventos-partido-analisi.dto';

@Injectable()
export class EventosPartidoAnalisisService {
  create(createEventosPartidoAnalisiDto: CreateEventosPartidoAnalisiDto) {
    return 'This action adds a new eventosPartidoAnalisi';
  }

  findAll() {
    return `This action returns all eventosPartidoAnalisis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventosPartidoAnalisi`;
  }

  update(id: number, updateEventosPartidoAnalisiDto: UpdateEventosPartidoAnalisiDto) {
    return `This action updates a #${id} eventosPartidoAnalisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventosPartidoAnalisi`;
  }
}
