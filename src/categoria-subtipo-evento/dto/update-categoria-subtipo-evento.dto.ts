import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaSubtipoEventoDto } from './create-categoria-subtipo-evento.dto';

export class UpdateCategoriaSubtipoEventoDto extends PartialType(CreateCategoriaSubtipoEventoDto) {}
