import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaOrganizacioneDto } from './create-categoria-organizacione.dto';

export class UpdateCategoriaOrganizacioneDto extends PartialType(CreateCategoriaOrganizacioneDto) {}
