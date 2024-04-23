import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosPersonaDto } from './create-datos-persona.dto';

export class UpdateDatosPersonaDto extends PartialType(CreateDatosPersonaDto) {}
