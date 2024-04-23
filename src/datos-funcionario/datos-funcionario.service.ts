import { Injectable } from '@nestjs/common';
import { CreateDatosFuncionarioDto } from './dto/create-datos-funcionario.dto';
import { UpdateDatosFuncionarioDto } from './dto/update-datos-funcionario.dto';

@Injectable()
export class DatosFuncionarioService {
  create(createDatosFuncionarioDto: CreateDatosFuncionarioDto) {
    return 'This action adds a new datosFuncionario';
  }

  findAll() {
    return `This action returns all datosFuncionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosFuncionario`;
  }

  update(id: number, updateDatosFuncionarioDto: UpdateDatosFuncionarioDto) {
    return `This action updates a #${id} datosFuncionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosFuncionario`;
  }
}
