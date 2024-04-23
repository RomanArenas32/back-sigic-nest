import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosOrganizaciones {
  @PrimaryGeneratedColumn()
  id_organizaciones: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column({ nullable: true })
  organizacion: string;

  @Column({ nullable: true })
  observacion: string;

  @Column({ nullable: true })
  fechareg_organizacion: string;
}

