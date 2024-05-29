import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosModule } from './eventos/eventos.module';
import { CategoriaDelegacionModule } from './categoria-delegacion/categoria-delegacion.module';
import { CategoriaEventosModule } from './categoria-eventos/categoria-eventos.module';
import { CategoriaJurisdiccionModule } from './categoria-jurisdiccion/categoria-jurisdiccion.module';
import { CategoriaLugarModule } from './categoria-lugar/categoria-lugar.module';
import { CategoriaOrganizacionesModule } from './categoria-organizaciones/categoria-organizaciones.module';
import { CategoriaPersonasModule } from './categoria-personas/categoria-personas.module';
import { CategoriaSubtipoEventoModule } from './categoria-subtipo-evento/categoria-subtipo-evento.module';
import { DatosAmpliacionesModule } from './datos-ampliaciones/datos-ampliaciones.module';
import { DatosDesarrolloModule } from './datos-desarrollo/datos-desarrollo.module';
import { DatosFuncionarioModule } from './datos-funcionario/datos-funcionario.module';
import { DatosLugarModule } from './datos-lugar/datos-lugar.module';
import { DatosNovedadesModule } from './datos-novedades/datos-novedades.module';
import { DatosOrganizacionesModule } from './datos-organizaciones/datos-organizaciones.module';
import { DatosPersonasModule } from './datos-personas/datos-personas.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { EventosEventosModule } from './eventos.eventos/eventos.eventos.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { Notificaciones2Module } from './notificaciones2/notificaciones2.module';
import { EventosNovedadesModule } from './eventos-novedades/eventos-novedades.module';
import { EventosPartidoAnalisisModule } from './eventos-partido-analisis/eventos-partido-analisis.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Organizaciones } from './datos-organizaciones/entities/datos-organizacione.entity';
import { EventosMotivosModule } from './motivo-eventos/motivos.eventos.module';
import { MotivoEventos } from './motivo-eventos/entities/motivo.evento.entity';
import { AuthModule } from './autenticacion/auth.module';


@Module({
  imports: [EventosModule, TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "sigic",
    "entities": [Usuario, Organizaciones, MotivoEventos], //["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), EventosMotivosModule,UsuariosModule, AuthModule,  CategoriaDelegacionModule, CategoriaEventosModule, CategoriaJurisdiccionModule, CategoriaLugarModule, CategoriaOrganizacionesModule, CategoriaPersonasModule, CategoriaSubtipoEventoModule, DatosAmpliacionesModule, DatosDesarrolloModule, DatosFuncionarioModule, DatosLugarModule, DatosNovedadesModule, DatosOrganizacionesModule, DatosPersonasModule, EscuelasModule, EventosEventosModule, FuncionariosModule, NotificacionesModule, Notificaciones2Module, EventosNovedadesModule, EventosPartidoAnalisisModule, 
],
  controllers: [],
  providers: [],
})
export class AppModule {}
