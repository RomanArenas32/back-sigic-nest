import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaPersonas {
  @PrimaryGeneratedColumn()
  id_cat_personas: number;

  @Column()
  personas: string;
}

