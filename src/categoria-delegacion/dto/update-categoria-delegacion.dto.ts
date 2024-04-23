import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDelegacionDto } from './create-categoria-delegacion.dto';

export class UpdateCategoriaDelegacionDto extends PartialType(CreateCategoriaDelegacionDto) {}
