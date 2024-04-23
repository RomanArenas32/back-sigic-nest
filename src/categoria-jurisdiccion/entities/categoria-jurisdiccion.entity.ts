import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaJurisdiccion {
  @PrimaryGeneratedColumn()
  id_jurisdiccion: number;

  @Column({ nullable: true })
  superintendencia: string;

  @Column({ nullable: true })
  departamental: string;

  @Column({ nullable: true })
  dependencia: string;

  @Column({ nullable: false })
  fechareg_jurisdiccion: string;
}

