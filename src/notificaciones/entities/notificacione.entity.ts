import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notificaciones {
  @PrimaryGeneratedColumn()
  id_notificacion1: number;

  @Column({ type: 'int', nullable: true })
  id_evento: number;

  @Column({ length: 200, nullable: true })
  estado: string;

  @Column({ length: 255, nullable: true })
  fechayhora: string;
}

