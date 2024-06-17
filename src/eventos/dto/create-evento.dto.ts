import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNumber, IsNotEmpty, IsString } from "class-validator";

@Entity()
export class CreateEventoDto {
    // Se genera automáticamente desde la entidad
    @PrimaryGeneratedColumn()
    @IsNumber()
    id?: number;

    @Column()
    @IsNotEmpty() 
    // Delegación Azul
    delegacion: string;

    @Column()
    @IsNotEmpty() 
    // Marcha por la aparición con vida de mi perro
    nombre_evento: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    // marcha
    tipo_evento: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    // no hay - si hay cual?  //no es opcional
    antecedentes: string;

    // opcional
    @Column()
    banner?: Buffer;

    @Column()
    @IsNotEmpty()
    @IsString()
    // Familiares de un cachorro reclaman su aparición con vida
    extracto: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    // No hay - Cuáles
    organizacion: string;

    @Column()
    @IsNotEmpty()
    nivel_conflictividad: string;
}