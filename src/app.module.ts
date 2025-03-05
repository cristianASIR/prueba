import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prueba1Module } from './prueba1/prueba1.module';

@Module({
  imports: [Prueba1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
