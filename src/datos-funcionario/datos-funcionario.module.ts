import { Module } from '@nestjs/common';
import { DatosFuncionarioService } from './datos-funcionario.service';
import { DatosFuncionarioController } from './datos-funcionario.controller';

@Module({
  controllers: [DatosFuncionarioController],
  providers: [DatosFuncionarioService],
})
export class DatosFuncionarioModule {}
