import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('api/v1/usuarios')
export class UsuariosController {

    constructor(private UsuariosService: UsuariosService){}

        @Post()
        createUser(@Body() usuario: CreateUsuarioDto){

        }
    
}
