import { IsNumber, IsNotEmpty, IsString } from "class-validator";


export class CreateUsuarioDto {
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombre_usuario: string;

    @IsNotEmpty()
    @IsString()
    apellido_usuario: string;

    @IsNumber()
    @IsNotEmpty()
    dni: number;

    @IsNotEmpty()
    @IsString()
    delegacion: string;
}
