import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prueba1Service } from './prueba1.service';
import { CreatePrueba1Dto } from './dto/create-prueba1.dto';
import { UpdatePrueba1Dto } from './dto/update-prueba1.dto';

@Controller('prueba1')
export class Prueba1Controller {
  constructor(private readonly prueba1Service: Prueba1Service) {}

  @Post()
  create(@Body() createPrueba1Dto: CreatePrueba1Dto) {
    return this.prueba1Service.create(createPrueba1Dto);
  }

  @Get()
  findAll() {
    return this.prueba1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prueba1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrueba1Dto: UpdatePrueba1Dto) {
    return this.prueba1Service.update(+id, updatePrueba1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prueba1Service.remove(+id);
  }
}
