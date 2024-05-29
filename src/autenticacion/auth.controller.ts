import { Body, Controller,  Post } from '@nestjs/common';
import { UsuariosService } from './auth.service';
import { LoginUser } from './dto/login-usuario-dto';

@Controller('api/v1/authenticate')
export class UsuariosController {
  constructor(private UsuariosService: UsuariosService) {}

  @Post()
  loginUser(@Body() usuario: LoginUser) {
    return this.UsuariosService.loginUser(usuario);
  }
  /*@Get('/:legajo')
  getUserByLegajo(@Param('legajo') legajo: string) {
    return this.UsuariosService.findUsuarioByLegajo(legajo);
  }*/

}
