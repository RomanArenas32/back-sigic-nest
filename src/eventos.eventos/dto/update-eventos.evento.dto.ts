import { PartialType } from '@nestjs/mapped-types';
import { CreateEventosEventoDto } from './create-eventos.evento.dto';

export class UpdateEventosEventoDto extends PartialType(CreateEventosEventoDto) {}
