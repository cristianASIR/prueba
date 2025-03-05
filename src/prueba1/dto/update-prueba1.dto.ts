import { PartialType } from '@nestjs/mapped-types';
import { CreatePrueba1Dto } from './create-prueba1.dto';

export class UpdatePrueba1Dto extends PartialType(CreatePrueba1Dto) {}
