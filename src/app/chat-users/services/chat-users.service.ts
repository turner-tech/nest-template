import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ChatUsers } from '../models/chat-users.entity';
import { DbUser } from '../models/db-user.interface';

@Injectable()
export class ChatUsersService {
  constructor(
    @InjectRepository(ChatUsers)
    private readonly feedPostRepository: Repository<ChatUsers>,
  ) {}

  findAllPosts(): Observable<DbUser[]> {
    return from(this.feedPostRepository.find());
  }
}
