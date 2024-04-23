import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaJurisdiccionDto } from './create-categoria-jurisdiccion.dto';

export class UpdateCategoriaJurisdiccionDto extends PartialType(CreateCategoriaJurisdiccionDto) {}
