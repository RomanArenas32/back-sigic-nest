import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosDesarrollo {
  @PrimaryGeneratedColumn()
  id_desarrollo: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column({ nullable: true })
  id_lugar: number;

  @Column({ nullable: true })
  delegacion: string;

  @Column({ nullable: true })
  clasificacion_evento: string;

  @Column({ nullable: true })
  tipo_evento: string;

  @Column({ nullable: true })
  sub_tipo: string;

  @Column({ nullable: true })
  titulo: string;

  @Column({ nullable: true })
  extracto: string;

  @Column({ nullable: true })
  organizacion: string;

  @Column({ nullable: true })
  partido_novedad: string;

  @Column({ nullable: true })
  localidad_novedad: string;

  @Column({ nullable: true })
  barrio: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ nullable: true })
  georeferencia: string;

  @Column({ nullable: true })
  lugar: string;

  @Column({ nullable: true })
  fecha_evento: string;

  @Column({ nullable: true })
  hora_evento: string;

  @Column({ nullable: true })
  hora: string;

  @Column({ nullable: true })
  cantidad_actual: number;

  @Column({ nullable: true })
  corte: string;

  @Column({ nullable: true, length: 500 })
  observaciones: string;

  @Column({ nullable: true })
  estado: string;

  @Column({ nullable: true })
  fechareg_desarrollo: string;

  @Column({ nullable: true, type: 'text' })
  informe_reunion: string;
}


