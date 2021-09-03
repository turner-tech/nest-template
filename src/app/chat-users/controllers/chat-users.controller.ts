import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ChatUsersService } from '../services/chat-users.service';
import { DbUser } from '../models/db-user.interface';

@Controller('chat')
export class ChatUsersController {
  constructor(private feedService: ChatUsersService) {}

  @Get('users')
  findSelected(): Observable<DbUser[]> {
    return this.feedService.findAllPosts();
  }
}
