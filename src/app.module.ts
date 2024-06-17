import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Organizaciones } from './datos-organizaciones/entities/datos-organizacione.entity';
import { EventosMotivosModule } from './motivo-eventos/motivos.eventos.module';
import { MotivoEventos } from './motivo-eventos/entities/motivo.evento.entity';
import { AuthModule } from './autenticacion/auth.module';
import { DatosOrganizacionesModule } from './datos-organizaciones/datos-organizaciones.module';
import { Evento } from './eventos/entities/evento.entity';
import { EventosModule } from './eventos/eventos.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "sigic",
    "entities": [Usuario, Organizaciones, MotivoEventos, Evento], //["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), EventosMotivosModule,UsuariosModule, AuthModule, DatosOrganizacionesModule, EventosModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
