import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Notificaciones2Service } from './notificaciones2.service';
import { CreateNotificaciones2Dto } from './dto/create-notificaciones2.dto';
import { UpdateNotificaciones2Dto } from './dto/update-notificaciones2.dto';

@Controller('notificaciones2')
export class Notificaciones2Controller {
  constructor(private readonly notificaciones2Service: Notificaciones2Service) {}

  @Post()
  create(@Body() createNotificaciones2Dto: CreateNotificaciones2Dto) {
    return this.notificaciones2Service.create(createNotificaciones2Dto);
  }

  @Get()
  findAll() {
    return this.notificaciones2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificaciones2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificaciones2Dto: UpdateNotificaciones2Dto) {
    return this.notificaciones2Service.update(+id, updateNotificaciones2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificaciones2Service.remove(+id);
  }
}
