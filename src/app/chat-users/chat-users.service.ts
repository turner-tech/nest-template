import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ChatUsers } from './chat-users.entity';
import { DbUser } from './db-user.interface';

@Injectable()
export class ChatUsersService {
  constructor(
    @InjectRepository(ChatUsers)
    private readonly chatUsersRepository: Repository<ChatUsers>,
  ) {}

  findAllPosts(): Observable<DbUser[]> {
    return from(this.chatUsersRepository.find());
  }
}
