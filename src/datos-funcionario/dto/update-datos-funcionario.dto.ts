import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosFuncionarioDto } from './create-datos-funcionario.dto';

export class UpdateDatosFuncionarioDto extends PartialType(CreateDatosFuncionarioDto) {}
