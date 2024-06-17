import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: false })
  delegacion: string;

  @Column({ length: 200, nullable: false })
  nombre_evento: string;

  @Column({ length: 100, nullable: false })
  tipo_evento: string;

  @Column({ length: 200, nullable: false })
  antecedentes: string;

  @Column({ type: 'blob', nullable: true })
  banner: Buffer;

  @Column({ length: 500, nullable: false })
  extracto: string;

  @Column({ length: 500, nullable: false })
  organizacion: string;

  @Column({length: 100, nullable: false})
  nivel_conflictividad: string;
}



