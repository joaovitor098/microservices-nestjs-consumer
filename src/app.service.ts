import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  printMenssage(message: string) {
    console.log({ message });
  }
}
