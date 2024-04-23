import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaDelegacion {
  @PrimaryGeneratedColumn()
  id_delegacion: number;

  @Column({ nullable: true })
  delegacion: string;

  @Column({ nullable: true })
  fechareg_del: string;
}

