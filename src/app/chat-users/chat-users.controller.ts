import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ChatUsersService } from './chat-users.service';
import { DbUser } from './db-user.interface';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('chat')
export class ChatUsersController {
  constructor(private chatUsersService: ChatUsersService) {}

  @ApiOkResponse({ type: DbUser, isArray: true })
  @Get('users')
  findSelected(): Observable<DbUser[]> {
    return this.chatUsersService.findAllPosts();
  }
}