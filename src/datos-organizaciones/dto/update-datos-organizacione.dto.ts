import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosOrganizacioneDto } from './create-datos-organizacione.dto';

export class UpdateDatosOrganizacioneDto extends PartialType(CreateDatosOrganizacioneDto) {}
