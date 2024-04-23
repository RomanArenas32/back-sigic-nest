import { Module } from '@nestjs/common';
import { CategoriaDelegacionService } from './categoria-delegacion.service';
import { CategoriaDelegacionController } from './categoria-delegacion.controller';

@Module({
  controllers: [CategoriaDelegacionController],
  providers: [CategoriaDelegacionService],
})
export class CategoriaDelegacionModule {}
