import { Controller, Get } from '@nestjs/common';
import { RandomUserService } from './random-user.service';
import { RandomUser } from './random-user-model';
import { Observable } from 'rxjs';

@Controller('randomUser')
export class RandomUserController {
  constructor(private readonly appService: RandomUserService) {}

  @Get('user')
  getUser(): Observable<RandomUser[]> {
    return this.appService.getUser();
  }
}
