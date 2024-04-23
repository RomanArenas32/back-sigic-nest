import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosLugar {
  @PrimaryGeneratedColumn()
  id_lugar: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column({ nullable: true })
  lugar: string;

  @Column({ nullable: true })
  partido: string;

  @Column({ nullable: true })
  localidad: string;

  @Column({ nullable: true })
  barrio: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ nullable: true })
  georeferencia: string;

  @Column({ nullable: true })
  fecha_evento: string;

  @Column({ nullable: true })
  hora_evento: string;

  @Column({ nullable: true })
  estado_mensaje: string;

  @Column({ nullable: true })
  funcionario: string;

  @Column({ nullable: true })
  organizacion: string;

  @Column({ nullable: true })
  fechareg_lugar: string;
}

