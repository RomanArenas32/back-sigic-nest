import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosDesarrolloDto } from './create-datos-desarrollo.dto';

export class UpdateDatosDesarrolloDto extends PartialType(CreateDatosDesarrolloDto) {}
