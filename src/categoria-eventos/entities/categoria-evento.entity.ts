export class CategoriaEvento {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaEventos {
  @PrimaryGeneratedColumn()
  id_cat_eventos: number;

  @Column({ nullable: true })
  tipo: string;
}
