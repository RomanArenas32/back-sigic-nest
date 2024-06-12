import { Body, Controller,  Get,  Post, Request, UseGuards } from '@nestjs/common';
import { UsuariosService } from './auth.service';
import { LoginUser } from './dto/login-usuario-dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('api/v1/authenticate')
export class UsuariosController {
  constructor(private UsuariosService: UsuariosService) {}

  @Post()
  loginUser(@Body() usuario: LoginUser) {
    return this.UsuariosService.loginUser(usuario);
  }
  @Get('/profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req: any) {
    return this.UsuariosService.getProfile(req);
  }

}
