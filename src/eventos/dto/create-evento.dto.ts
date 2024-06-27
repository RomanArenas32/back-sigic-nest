import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario-dto';
import { Type } from 'class-transformer';

@Entity()
export class CreateEventoDto {
    // Se genera automáticamente desde la entidad
    @PrimaryGeneratedColumn()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsString()
    responsable: string;
  
    @IsNotEmpty()
    @IsString()
    partido: string;
  
    @IsNotEmpty()
    @IsString()
    localidad: string;
  
    @IsNotEmpty()
    @IsString()
    fecha: Date;
  
    @IsNotEmpty()
    @IsString()
    hora: string;
  
    @IsNotEmpty()
    @IsString()
    tipo: string;
  
    @IsNotEmpty()
    @IsString()
    subtipo: string;
  
    @IsNotEmpty()
    @IsString()
    programacion: string;
  
    @IsNotEmpty()
    @IsString()
    coordenadas: string;

    @IsNotEmpty()
    @IsString()
    baner: Buffer;
  
    @IsNotEmpty()
    @IsString()
    org: string[];
  
    @IsNotEmpty()
    @IsString()
    infoDelegacion: string;
  
    @IsNotEmpty()
    @IsString()
  infoReunion: string;
  
    @IsNotEmpty()
    @IsString()
    extracto: string;  

    @IsNotEmpty()
    @IsString()
    lugar: string; 

    @IsNotEmpty()
    @IsString()
    barrio: string; 

    @Type(()=> UpdateUsuarioDto)
    @IsNotEmpty()
    usuario!: UpdateUsuarioDto;
}