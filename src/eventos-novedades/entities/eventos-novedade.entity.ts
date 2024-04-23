import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Novedades {
  @PrimaryGeneratedColumn()
  id_novedad: number;

  @Column({ type: 'int', nullable: true })
  id_escuela: number;

  @Column({ length: 255, nullable: true })
  novedad: string;

  @Column({ length: 255, nullable: true })
  hora: string;
}

