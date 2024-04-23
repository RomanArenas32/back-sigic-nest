import { PartialType } from '@nestjs/mapped-types';
import { CreateEventosNovedadeDto } from './create-eventos-novedade.dto';

export class UpdateEventosNovedadeDto extends PartialType(CreateEventosNovedadeDto) {}
