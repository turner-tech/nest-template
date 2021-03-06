import { Controller, Get } from '@nestjs/common';
import { RandomUserService } from './random-user.service';
import { RandomUser } from './random-user-model';
import { Observable } from 'rxjs';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('random users')
@Controller('randomUser')
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @ApiOkResponse({ type: RandomUser, isArray: true })
  @Get('')
  getUser(): Observable<RandomUser[]> {
    return this.randomUserService.getUser();
  }
}
