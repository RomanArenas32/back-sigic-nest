import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaLugar {
  @PrimaryGeneratedColumn()
  id_cat_lugar: number;

  @Column({ nullable: true })
  partidos: string;

  @Column({ nullable: true })
  coordep: string;

  @Column({ nullable: true })
  localidades: string;

  @Column({ nullable: true })
  coordel: string;

  @Column({ nullable: false })
  fechareg_cat_lugar: string;
}

