import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Escuelas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  orden: number;

  @Column({ nullable: true })
  cod_sec: number;

  @Column({ nullable: true })
  seccion: string;

  @Column({ nullable: true })
  superintendencia: string;

  @Column({ nullable: true })
  circuito: number;

  @Column({ nullable: true })
  id_escuela: number;

  @Column({ nullable: true })
  escuela: string;

  @Column({ nullable: true })
  domicilio: string;

  @Column({ nullable: true })
  localidad: string;

  @Column({ nullable: true, name: 'min:mesa' })
  min_mesa: number;

  @Column({ nullable: true })
  max_mesa: number;

  @Column({ nullable: true })
  cant_mesa: number;

  @Column({ nullable: true })
  requiere_com: number;

  @Column({ nullable: true })
  nro_urnas: string;

  @Column({ nullable: true })
  apertura_escuela: string;

  @Column({ nullable: true })
  apertura_escuela2: number;

  @Column({ nullable: true })
  apertura_mesa: number;

  @Column({ nullable: true })
  cantida_votantes: number;

  @Column({ nullable: true })
  novedad: string;

  @Column({ nullable: true })
  hora: string;

  @Column({ nullable: true })
  hora_escuela: string;

  @Column({ nullable: true })
  hora_mesa: string;

  @Column({ nullable: true })
  hora_votos: string;

  @Column({ nullable: true })
  cierre_escuela: number;

  @Column({ nullable: true })
  cierre_mesa: number;

  @Column({ nullable: true })
  repliegue: number;

  @Column({ nullable: true })
  hora_cierre_escuela: string;

  @Column({ nullable: true })
  hora_cierre_mesa: string;

  @Column({ nullable: true })
  hora_repliegue: string;

  @Column({ nullable: true })
  cubiertas: number;
}

