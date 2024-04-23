import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notificaciones2 {
  @PrimaryGeneratedColumn()
  id_notificacion2: number;

  @Column({ type: 'int', nullable: true })
  id_lugar2: number;

  @Column({ length: 20, nullable: true })
  estado2: string;

  @Column({ length: 255, nullable: true })
  fechayhora: string;
}


