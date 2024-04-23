import { IsNumber, IsNotEmpty, IsString, IsBoolean } from "class-validator";


export class CreateUsuarioDto {
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombre_usuario!: string;

    @IsNotEmpty()
    @IsString()
    apellido_usuario!: string;

    @IsString()
    @IsNotEmpty()
    legajo!: string;

    @IsNotEmpty()
    @IsString()
    delegacion!: string;

    @IsBoolean()
    estado?: boolean;
}
