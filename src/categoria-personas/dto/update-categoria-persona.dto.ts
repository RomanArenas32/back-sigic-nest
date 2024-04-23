import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaPersonaDto } from './create-categoria-persona.dto';

export class UpdateCategoriaPersonaDto extends PartialType(CreateCategoriaPersonaDto) {}
