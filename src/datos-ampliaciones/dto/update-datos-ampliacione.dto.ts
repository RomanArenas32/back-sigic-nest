import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosAmpliacioneDto } from './create-datos-ampliacione.dto';

export class UpdateDatosAmpliacioneDto extends PartialType(CreateDatosAmpliacioneDto) {}
