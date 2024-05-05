import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
enum DELEGACIONES {
    "Delegacion Deparamental La Plata" = "Delegacion Deparamental La Plata",
    "Delegacion Deparamental Azul" = "Delegacion Deparamental Azul",
    "Delegacion Deparamental Bahia Blanca" = "Delegacion Deparamental Bahia Blanca",
    "Delegacion Deparamental Dolores" = "Delegacion Deparamental Dolores",
    "Delegacion Deparamental Exaltacion de la Cruz" = "Delegacion Deparamental Exaltacion de la Cruz",
    "Delegacion Deparamental Junin" = "Delegacion Deparamental Junin",
    "Delegacion Deparamental La Matanza" = "Delegacion Deparamental La Matanza",
    "Delegacion Deparamental Lomas de Zamora" = "Delegacion Deparamental Lomas de Zamora",
    "Delegacion Deparamental Mar del Plata" = "Delegacion Deparamental Mar del Plata",
    "Delegacion Deparamental Mercedes" = "Delegacion Deparamental Mercedes",
    "Delegacion Deparamental Moron" = "Delegacion Deparamental Moron",
    "Delegacion Deparamental Necochea" = "Delegacion Deparamental Necochea",
    "Delegacion Deparamental Pergamino" = "Delegacion Deparamental Pergamino",
    "Delegacion Deparamental Pilar" = "Delegacion Deparamental Pilar",
    "Delegacion Deparamental Pinamar" = "Delegacion Deparamental Pinamar",
    "Delegacion Deparamental Quilmes" = "Delegacion Deparamental Quilmes",
    "Delegacion Deparamental San Isidro" = "Delegacion Deparamental San Isidro",
    "Delegacion Deparamental San Martin" = "Delegacion Deparamental San Martin",
    "Delegacion Deparamental San Nicolas" = "Delegacion Deparamental San Nicolas",
    "Delegacion Deparamental Trenque Lauquen" = "Delegacion Deparamental Trenque Lauquen",
    "Delegacion Deparamental Zarate" = "Delegacion Deparamental Zarate",
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
    "ADMIN_ROLE" = "ADMIN_ROLE"
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
}


