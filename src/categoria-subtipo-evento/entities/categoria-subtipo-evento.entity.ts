import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaSubtipoEvento {
  @PrimaryGeneratedColumn()
  id_subtipo: number;

  @Column({ nullable: true })
  subtipo: string;

  @Column({ nullable: true })
  fechareg: Date;
}

