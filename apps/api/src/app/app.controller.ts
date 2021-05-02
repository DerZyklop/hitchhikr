import { Controller, Get } from '@nestjs/common';
import { Message } from '@hitchhikr/api-interfaces';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
