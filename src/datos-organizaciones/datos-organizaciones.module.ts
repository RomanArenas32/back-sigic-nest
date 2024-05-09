import { Module } from '@nestjs/common';
import { DatosOrganizacionesService } from './datos-organizaciones.service';
import { DatosOrganizacionesController } from './datos-organizaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizaciones } from './entities/datos-organizacione.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Organizaciones
    ])
  ],
  controllers: [DatosOrganizacionesController],
  providers: [DatosOrganizacionesService],
})
export class DatosOrganizacionesModule {}
