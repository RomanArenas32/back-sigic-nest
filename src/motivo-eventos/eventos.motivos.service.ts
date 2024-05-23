import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMotivoEventoDto } from './dto/create-motivo.evento.dto';
import { UpdateMotivoEventoDto } from './dto/update-motivo.evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MotivoEventos } from './entities/motivo.evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosMotivosService {
  constructor(
    @InjectRepository(MotivoEventos)
    private motivoEventosRepository: Repository<MotivoEventos>,
  ) {}

  //CREAR MTIVO DE EVENTO
  async createMotivo(dataEvento: CreateMotivoEventoDto) {
    const existeMotivo: CreateMotivoEventoDto = await this.findMotivoById(
      dataEvento.id,
    );
    if (existeMotivo) {
      throw new ConflictException('El motivo del evento ya esta registrado');
    }
    const nuevoMotivo = await this.motivoEventosRepository.save(dataEvento);
    const mensaje = 'Motivo del evento agregado correctamente';
    return { motivo: nuevoMotivo, mensaje };
  }

  //OBTENER TODOS LOS MOTIVOS DE EVENTOS
  async findAllMotivos() {
    return await this.motivoEventosRepository.find();
  }

  //OBTENER MOTIVO EVENTO POR ID
  async findMotivoById(id: number) {
    return await this.motivoEventosRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateEventosEventoDto: UpdateMotivoEventoDto) {
    return `This action updates a #${id} eventosEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventosEvento`;
  }
}
