import { Module } from '@nestjs/common';
import { ChatUserService } from './chat-user.service';
import { ChatUserController } from './chat-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatUser, ChatUserSchema } from './chat-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ChatUser.name, schema: ChatUserSchema },
    ]),
  ],
  providers: [ChatUserService],
  controllers: [ChatUserController],
})
export class ChatUserModule {}
