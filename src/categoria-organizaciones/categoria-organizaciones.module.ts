import { Module } from '@nestjs/common';
import { CategoriaOrganizacionesService } from './categoria-organizaciones.service';
import { CategoriaOrganizacionesController } from './categoria-organizaciones.controller';

@Module({
  controllers: [CategoriaOrganizacionesController],
  providers: [CategoriaOrganizacionesService],
})
export class CategoriaOrganizacionesModule {}
