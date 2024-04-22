import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: String, nullable: false, length: 50 })
    nombre: string;

    @Column({ type: String, nullable: false, length: 50 })
    apellido: string;

    @Column({ type: Number, nullable: false, length: 500 })
    dni: number;

    @Column({ type: String, nullable: false, length: 500 })
    delegacion: string;
}


