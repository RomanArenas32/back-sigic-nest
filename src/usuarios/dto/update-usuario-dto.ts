import { IsNumber, IsNotEmpty, IsString, IsBoolean, IsPositive, IsOptional } from "class-validator";


export class UpdateUsuarioDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsNotEmpty()
    @IsString()
    apellido!: string;

    @IsString()
    @IsNotEmpty()
    legajo!: string;

    @IsString()
    @IsNotEmpty()
    rol!: string;

    @IsNotEmpty()
    @IsString()
    delegacion!: string;

    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
