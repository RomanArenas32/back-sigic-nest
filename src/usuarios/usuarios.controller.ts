import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private UsuariosService: UsuariosService) {}

  @Post()
  createUser(@Body() usuario: CreateUsuarioDto) {
    return this.UsuariosService.createUser(usuario);
  }
  @Get('/:legajo')
  getUserByLegajo(@Param('legajo') legajo: string) {
    return this.UsuariosService.findUsuarioByLegajo(legajo);
  }

  @Get()
  getUsuariosActivos() {
    return this.UsuariosService.getUsuariosActivos();
  }
}
