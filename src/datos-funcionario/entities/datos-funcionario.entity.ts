import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosFuncionario {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column({ nullable: true })
  id_lugar: number;

  @Column({ nullable: true })
  situacion: string;

  @Column({ nullable: true })
  funcionario: string;

  @Column({ nullable: true })
  cargo: string;

  @Column({ nullable: true })
  fechareg_funcionario: string;
}

