import { IsNumber, IsNotEmpty, IsString } from "class-validator";


export class CreateEventoDto {
    // Se genera automaticamente desde la entity
    @IsNumber() 
    id?: number;

    @IsNotEmpty() 
    //Delegacion Azul
    delegacion: string;

    @IsNotEmpty() 
    //Marcha por la aparicion con vida de mi perro
    nombre_evento: string;

    @IsNotEmpty() 
    @IsString()
    //marcha
    tipo_evento: string;

    @IsNotEmpty() 
    @IsString()
    //no hay - si hay cual?  //no es opsional
    antecedentes:string;

    //opcional
    banner?:Buffer;

    @IsNotEmpty() 
    @IsString()
    //Familiares de un cachorro reclaman su aparicion con vida
    extracto: string;

    @IsNotEmpty() 
    @IsString()
    //No hay - Cuales
    organizacion: string;

    @IsNotEmpty() 
    @IsString()
    // Bajo - Medio - Alto
    nivel_conflictividad: string;
}
