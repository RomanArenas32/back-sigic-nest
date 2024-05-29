import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MotivoEventos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  motivo: string;
}

