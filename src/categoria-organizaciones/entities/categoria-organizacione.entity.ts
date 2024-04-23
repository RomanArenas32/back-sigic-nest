import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaOrganizaciones {
  @PrimaryGeneratedColumn()
  id_cat_organizaciones: number;

  @Column({ nullable: true })
  organizaciones: string;

  @Column({ nullable: true })
  fechareg_organizaciones: string;
}

