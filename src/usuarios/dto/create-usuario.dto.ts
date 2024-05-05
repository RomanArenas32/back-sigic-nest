import { IsNumber, IsNotEmpty, IsString, IsBoolean, IsPositive, IsOptional } from "class-validator";


export class CreateUsuarioDto {
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

    @IsString()
    @IsNotEmpty()
    usuario!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsNotEmpty()
    @IsString()
    delegacion!: string;

    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
