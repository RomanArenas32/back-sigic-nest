import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, nullable: false }) // delegación que carga
  responsable: string;

  @Column({ length: 100, nullable: false })
  partido: string;

  @Column({ length: 100, nullable: false })
  localidad: string;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ length: 100, nullable: false })
  hora: string;

  @Column({ length: 500, nullable: false })
  tipo: string;

  @Column({ length: 500, nullable: false })
  subtipo: string;

  @Column({ length: 500, nullable: false }) // ev. programado, no programado etc
  programacion: string;

  @Column({ type: 'bytea', nullable: true }) 
  baner: Buffer;

  @Column({ type: 'simple-array', nullable: false, default: "Ciudadania en general" })
  org: string[];

  @Column({ length: 500, nullable: false })
  infoDelegacion: string;

  @Column({ length: 500, nullable: false })
  infoReunion: string;

  @Column({ length: 500, nullable: false })
  extracto: string;
}



