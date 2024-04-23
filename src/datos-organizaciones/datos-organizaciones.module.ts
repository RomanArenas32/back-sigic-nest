import { Module } from '@nestjs/common';
import { DatosOrganizacionesService } from './datos-organizaciones.service';
import { DatosOrganizacionesController } from './datos-organizaciones.controller';

@Module({
  controllers: [DatosOrganizacionesController],
  providers: [DatosOrganizacionesService],
})
export class DatosOrganizacionesModule {}
