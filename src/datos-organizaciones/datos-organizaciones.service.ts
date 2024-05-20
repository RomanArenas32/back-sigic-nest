import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDatosOrganizacioneDto } from './dto/create-datos-organizacione.dto';
import { UpdateDatosOrganizacioneDto } from './dto/update-datos-organizacione.dto';
import { Repository } from 'typeorm';
import { Organizaciones } from './entities/datos-organizacione.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DatosOrganizacionesService {
  constructor(
    @InjectRepository(Organizaciones)
    private organizacionRepository: Repository<Organizaciones>,
  ) {}

  //CREAR ORGANIZACION
  async createOrganizacion(organizacionData: CreateDatosOrganizacioneDto) {
    const existe: CreateDatosOrganizacioneDto =
      await this.findOrganizacionByNombre(organizacionData.nombre_organizacion);

    if (existe) {
      throw new ConflictException(
        `La organizacion ${organizacionData.nombre_organizacion} ya esta registrada`,
      );
    }
    const nuevaOrg = await this.organizacionRepository.save(organizacionData);
    const mensaje = 'Organizacion creada correctamente';
    return { organizacion: nuevaOrg, mensaje };
  }

  async findAllOrganizaciones() {
    return await this.organizacionRepository.find();
  }
  //BUSCAR ORGANIZACION POR NOMBRE
  async findOrganizacionByNombre(nombre: string) {
    return await this.organizacionRepository.findOne({
      where: { nombre_organizacion: nombre },
    });
  }
  //BUSCAR ORGANIZACION POR ID
  async findOrganizacionById(id: number) {
    return await this.organizacionRepository.findOne({
      where: { id },
    });
  }

  //actualizar ORGANIZACION
  async updateOrganizacion(organizacion: UpdateDatosOrganizacioneDto) {
    const existeOrg: Organizaciones =
      await this.findOrganizacionById(organizacion.id)
      if (!existeOrg) {
      throw new ConflictException(
        `Error al intentar actualizar la organizacion.!!`,
      );
    }
    await this.organizacionRepository.update(
      { id: organizacion.id },
      { ...organizacion },
    );
  }

  async removeOrganizacion(id: number) {
    const organizacion = await this.findOrganizacionById(id);
    if (!organizacion) {
      throw new ConflictException(
        `La organizacion con el ID ${id} no se encuentra`,
      );
    }
    await this.organizacionRepository.remove(organizacion);
    return { mensaje: `Organizacion eliminada correctamente` };
  }
}
