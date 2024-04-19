import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Evento {

    //Este decorador genera automaticamente el id
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: String, nullable: false, length: 500 })
    //Delegacion Azul
    delegacion: string;

    @Column({ type: String, nullable: false, length: 200 })
    //Marcha por la aparicion con vida de mi perro
    nombre_evento: string;

    @Column({ type: String, nullable: false, length: 100 })
    //marcha
    tipo_evento: string;

    @Column({ type: String, nullable: false, length: 200 })
    //no hay - si hay cual?  //no es opsional
    antecedentes:string;

    @Column({ type: 'longblob', nullable: true })
    //opcional
    banner?:Buffer;

    @Column({ type: String, nullable: false, length: 500 })
    //Familiares de un cachorro reclaman su aparicion con vida
    extracto: string;

    @Column({ type: String, nullable: false, length: 500 })
    //No hay - Cuales
    organizacion: string;

    @Column({ type: String, nullable: false })
    nivel_conflictividad: string;

}


