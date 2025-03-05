import { Module } from '@nestjs/common';
import { Prueba1Service } from './prueba1.service';
import { Prueba1Controller } from './prueba1.controller';

@Module({
  controllers: [Prueba1Controller],
  providers: [Prueba1Service],
})
export class Prueba1Module {}
