import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('storage-test')
  getStorage(@Payload() message: string) {
    this.appService.printMenssage(message);
  }
}
