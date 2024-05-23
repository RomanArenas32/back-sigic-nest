import { PartialType } from '@nestjs/mapped-types';
import { CreateMotivoEventoDto } from './create-motivo.evento.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateMotivoEventoDto extends PartialType(CreateMotivoEventoDto) {

    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    motivo!: string;
}
