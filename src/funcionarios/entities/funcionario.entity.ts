import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Funcionarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  delegacion: string;

  @Column({ length: 255, nullable: true })
  apellido: string;

  @Column({ length: 255, nullable: true })
  nombre: string;

  @Column({ length: 255, nullable: true })
  funcionario: string;

  @Column({ length: 255, nullable: true })
  localidad: string;

  @Column({ length: 255, nullable: true })
  partido: string;

  @Column({ type: 'int', nullable: true })
  mesa: number;

  @Column({ type: 'int', nullable: true })
  seccion: number;

  @Column({ length: 255, nullable: true })
  escuela: string;

  @Column({ length: 255, nullable: true })
  direccion: string;

  @Column({ length: 255, nullable: true })
  estado: string;

  @Column({ length: 255, nullable: true })
  hora_voto: string;
}

