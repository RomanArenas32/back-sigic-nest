import { Injectable } from '@nestjs/common';
import { CreateNotificaciones2Dto } from './dto/create-notificaciones2.dto';
import { UpdateNotificaciones2Dto } from './dto/update-notificaciones2.dto';

@Injectable()
export class Notificaciones2Service {
  create(createNotificaciones2Dto: CreateNotificaciones2Dto) {
    return 'This action adds a new notificaciones2';
  }

  findAll() {
    return `This action returns all notificaciones2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificaciones2`;
  }

  update(id: number, updateNotificaciones2Dto: UpdateNotificaciones2Dto) {
    return `This action updates a #${id} notificaciones2`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificaciones2`;
  }
}
