import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaLugarDto } from './create-categoria-lugar.dto';

export class UpdateCategoriaLugarDto extends PartialType(CreateCategoriaLugarDto) {}
