import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosAmpliaciones {
  @PrimaryGeneratedColumn()
  id_ampliacion: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column({ nullable: true })
  motivo: string;

  @Column({ nullable: true })
  ampliacion: string;

  @Column({ nullable: true })
  fechareg_ampliacion: string;
}

