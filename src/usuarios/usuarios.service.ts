import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(){}

    createUser(userData: CreateUsuarioDto){
        
    }
}
