import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatUsersService } from './services/chat-users.service';
import { ChatUsersController } from './controllers/chat-users.controller';
import { ChatUsers } from './models/chat-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatUsers])],
  providers: [ChatUsersService],
  controllers: [ChatUsersController],
})
export class ChatUsersModule {}
