import { PartialType } from '@nestjs/mapped-types';
import { CreateEventosPartidoAnalisiDto } from './create-eventos-partido-analisi.dto';

export class UpdateEventosPartidoAnalisiDto extends PartialType(CreateEventosPartidoAnalisiDto) {}
