import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosPersonas {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column({ nullable: true })
  id_lugar: number;

  @Column({ nullable: true })
  situacion: string;

  @Column({ nullable: true })
  apellidos: string;

  @Column({ nullable: true })
  nombres: string;

  @Column({ nullable: true })
  alias: string;

  @Column({ nullable: true })
  edad: number;

  @Column({ nullable: true })
  domicilio: string;

  @Column({ nullable: true })
  partido: string;

  @Column({ nullable: true })
  localidad: string;

  @Column({ nullable: true })
  barrio: string;

  @Column({ nullable: true })
  coordenadas: string;

  @Column({ nullable: true })
  fechareg_persona: string;
}

