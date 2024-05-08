import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";


export class CreateDatosOrganizacioneDto {

    @IsNumber()
    @IsPositive()
    @IsOptional()
    id_organizacion?:number;

    @IsNotEmpty()
    @IsString()
    nombre_organizacion!: string;

    @IsNotEmpty()
    @IsString()
    observacion_organizacion!: string;

}
