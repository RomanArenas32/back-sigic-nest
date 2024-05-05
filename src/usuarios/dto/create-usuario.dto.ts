import { IsNumber, IsNotEmpty, IsString, IsBoolean, IsPositive, IsOptional, MinLength } from "class-validator";


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

    @IsNotEmpty()
    @IsString()
    delegacion!: string;

    @IsNotEmpty()
    @IsString()
    rol!: string;

    @IsNotEmpty()
    @IsString()
    usuario!: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password!: string;

    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
