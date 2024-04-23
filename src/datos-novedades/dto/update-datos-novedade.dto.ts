import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosNovedadeDto } from './create-datos-novedade.dto';

export class UpdateDatosNovedadeDto extends PartialType(CreateDatosNovedadeDto) {}
