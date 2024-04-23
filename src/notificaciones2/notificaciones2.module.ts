import { Module } from '@nestjs/common';
import { Notificaciones2Service } from './notificaciones2.service';
import { Notificaciones2Controller } from './notificaciones2.controller';

@Module({
  controllers: [Notificaciones2Controller],
  providers: [Notificaciones2Service],
})
export class Notificaciones2Module {}
