import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [EventosModule, TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "eventos_2",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
