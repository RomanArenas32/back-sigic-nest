import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateMotivoEventoDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    motivo!: string;
}
