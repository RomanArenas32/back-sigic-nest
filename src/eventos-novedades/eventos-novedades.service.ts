import { Injectable } from '@nestjs/common';
import { CreateEventosNovedadeDto } from './dto/create-eventos-novedade.dto';
import { UpdateEventosNovedadeDto } from './dto/update-eventos-novedade.dto';

@Injectable()
export class EventosNovedadesService {
  create(createEventosNovedadeDto: CreateEventosNovedadeDto) {
    return 'This action adds a new eventosNovedade';
  }

  findAll() {
    return `This action returns all eventosNovedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventosNovedade`;
  }

  update(id: number, updateEventosNovedadeDto: UpdateEventosNovedadeDto) {
    return `This action updates a #${id} eventosNovedade`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventosNovedade`;
  }
}
