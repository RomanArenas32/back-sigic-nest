import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosNovedades {
  @PrimaryGeneratedColumn()
  id_novedades: number;

  @Column({ nullable: true })
  id_lugar: number;

  @Column({ nullable: true })
  hora: string;

  @Column({ nullable: true })
  cantidad: number;

  @Column({ nullable: true })
  grupo: string;

  @Column({ nullable: true })
  corte: string;

  @Column({ nullable: true })
  sintesis: string;

  @Column({ nullable: true })
  estado: string;

  @Column({ nullable: true })
  fecha_reg: string;

  @Column({ nullable: true })
  hora_reg: string;
}

