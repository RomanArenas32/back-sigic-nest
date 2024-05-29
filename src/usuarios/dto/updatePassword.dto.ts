import {  IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";


export class UpdatePassword {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;
    
    @IsString()
    @IsNotEmpty()
    legajo!: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'La contraseña debe tener mas de 8 caracteres' })
    password!: string;
}
