import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatUsersService } from './chat-users.service';
import { ChatUsersController } from './chat-users.controller';
import { ChatUsers } from './chat-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatUsers])],
  providers: [ChatUsersService],
  controllers: [ChatUsersController],
})
export class ChatUsersModule {}
