import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosOrganizacioneDto } from './create-datos-organizacione.dto';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateDatosOrganizacioneDto extends PartialType(
  CreateDatosOrganizacioneDto,
) {
  @IsNotEmpty()
  @IsString()
  nombre_organizacion!: string;

  @IsNotEmpty()
  @IsString()
  observacion_organizacion!: string;
}
