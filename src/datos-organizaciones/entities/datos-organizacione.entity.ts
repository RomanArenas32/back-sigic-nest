import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Organizaciones {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: String, nullable: false, length: 60 })
  nombre_organizacion: string;

  @Column({type: String, nullable: false, length: 300 })
  observacion_organizacion: string;
}

