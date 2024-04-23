import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EventosEventos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  delegacion: string;

  @Column({ length: 150, nullable: true })
  clasificacion_evento: string;

  @Column({ length: 150, nullable: true })
  tipo_evento: string;

  @Column({ length: 100, nullable: true })
  subtipo: string;

  @Column({ length: 255, nullable: true })
  otrosubtipo: string;

  @Column({ type: 'text', nullable: true })
  antecedentes_texto: string;

  @Column({ type: 'text', nullable: true })
  antecedentes_texto2: string;

  @Column({ type: 'blob', nullable: true })
  banner: Buffer;

  @Column({ length: 255, nullable: true })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  extracto: string;

  @Column({ length: 255, nullable: true })
  organizacion: string;

  @Column({ length: 45, nullable: true })
  nivel_conflictividad: string;

  @Column({ length: 45, nullable: false })
  fecha_reg: string;
}

