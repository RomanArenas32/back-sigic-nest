import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PartidoAnalisis {
  @PrimaryGeneratedColumn()
  id_analisis: number;

  @Column({ type: 'int', nullable: true })
  id_seccion: number;

  @Column({ type: 'int', nullable: true })
  id_catas: number;

  @Column({ length: 255, nullable: true })
  nombre: string;

  @Column({ length: 255, nullable: true })
  cabecera: string;
}

