import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificaciones2Dto } from './create-notificaciones2.dto';

export class UpdateNotificaciones2Dto extends PartialType(CreateNotificaciones2Dto) {}
