import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  //CREAR NUEVO EVENTO
  async createEvento(evento: CreateEventoDto) {
    try {
      const nuevoEvento = await this.eventoRepository.save(evento);
      const mensaje = 'Evento creado correctamente';
      return { evento: nuevoEvento, mensaje };
    } catch (error) {
      console.log(error);
      throw new ConflictException('Error al cargar el evento');
    }
  }

  findAll() {
    return `This action returns all eventos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
