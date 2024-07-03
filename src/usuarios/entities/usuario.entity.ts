import { Evento } from "src/eventos/entities/evento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
enum DELEGACIONES {
    "Delegacion Departamental La Plata" = "Delegacion Departamental La Plata",
    "Delegacion Departamental Azul" = "Delegacion Departamental Azul",
    "Delegacion Departamental Bahia Blanca" = "Delegacion Departamental Bahia Blanca",
    "Delegacion Departamental Dolores" = "Delegacion Departamental Dolores",
    "Delegacion Departamental Exaltacion de la Cruz" = "Delegacion Departamental Exaltacion de la Cruz",
    "Delegacion Departamental Junin" = "Delegacion Departamental Junin",
    "Delegacion Departamental La Matanza" = "Delegacion Departamental La Matanza",
    "Delegacion Departamental Lomas de Zamora" = "Delegacion Departamental Lomas de Zamora",
    "Delegacion Departamental Mar del Plata" = "Delegacion Departamental Mar del Plata",
    "Delegacion Departamental Mercedes" = "Delegacion Departamental Mercedes",
    "Delegacion Departamental Moron" = "Delegacion Departamental Moron",
    "Delegacion Departamental Necochea" = "Delegacion Departamental Necochea",
    "Delegacion Departamental Pergamino" = "Delegacion Departamental Pergamino",
    "Delegacion Departamental Pilar" = "Delegacion Departamental Pilar",
    "Delegacion Departamental Pinamar" = "Delegacion Departamental Pinamar",
    "Delegacion Departamental Quilmes" = "Delegacion Departamental Quilmes",
    "Delegacion Departamental San Isidro" = "Delegacion Departamental San Isidro",
    "Delegacion Departamental San Martin" = "Delegacion Departamental San Martin",
    "Delegacion Departamental San Nicolas" = "Delegacion Departamental San Nicolas",
    "Delegacion Departamental Trenque Lauquen" = "Delegacion Departamental Trenque Lauquen",
    "Delegacion Deparamental Zarate" = "Delegacion Departamental Zarate",
    "Subdelegacion Departamental Tandil" = "Subdelegacion Departamental Tandil",
    "Subdelegacion Departamental Olavarria" = "Subdelegacion Departamental Olavarria",
    "Subdelegacion Departamental Tres Arroyos" = "Subdelegacion Departamental Tres Arroyos",
    "Subdelegacion Departamental Cañuelas" = "Subdelegacion Departamental Cañuelas",
    "Subdelegacion Departamental San Vicente" = "Subdelegacion Departamental San Vicente",
    "Subdelegacion Departamental Tres de Febrero" = "Subdelegacion Departamental Tres de Febrero",
    "Direccion Reunion de Informacion" = "Direccion Reunion de Informacion"
}
enum ROL {
    'USER_ROLE' = 'USER_ROLE',
    "ADMIN_ROLE" = "ADMIN_ROLE",
    "SUPERADMIN_ROLE" = "SUPERADMIN_ROLE"
}

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: String, nullable: false, length: 50 })
    apellido: string;

    @Column({ type: String, nullable: false, length: 50 })
    nombre: string;

    @Column({ type: String, nullable: false,  length: 8 })
    legajo: string;

    @Column({ type: "enum", enum: DELEGACIONES, nullable: false })
    delegacion: string;

    @Column({ type: String, nullable: false})
    usuario: string;

    @Column({ type: String, nullable: false })
    password: string;

    @Column({ type: 'enum', enum: ROL, nullable: false, default: ROL.USER_ROLE })
    rol: string;

    @Column({ type: Boolean, nullable: false,  default: true })
    estado: boolean;

    @OneToMany(() => Evento, evento => evento.usuario)
    eventos?: Evento[];
}


