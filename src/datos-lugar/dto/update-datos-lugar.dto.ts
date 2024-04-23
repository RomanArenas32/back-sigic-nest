import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosLugarDto } from './create-datos-lugar.dto';

export class UpdateDatosLugarDto extends PartialType(CreateDatosLugarDto) {}
