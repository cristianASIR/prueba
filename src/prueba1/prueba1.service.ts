import { Injectable } from '@nestjs/common';
import { CreatePrueba1Dto } from './dto/create-prueba1.dto';
import { UpdatePrueba1Dto } from './dto/update-prueba1.dto';

@Injectable()
export class Prueba1Service {
  create(createPrueba1Dto: CreatePrueba1Dto) {
    return 'This action adds a new prueba1';
  }

  findAll() {
    return `This action returns all prueba1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prueba1`;
  }

  update(id: number, updatePrueba1Dto: UpdatePrueba1Dto) {
    return `This action updates a #${id} prueba1`;
  }

  remove(id: number) {
    return `This action removes a #${id} prueba1`;
  }
}
