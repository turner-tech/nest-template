import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChatUserService } from './chat-user.service';
import { ChatUser } from './chat-user.schema';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult as DeletingResult } from 'typeorm/query-builder/result/DeleteResult';
import { DeleteResult, UpdateResult } from 'mongodb';
import { UpdateResult as UpdatingResult } from 'typeorm/query-builder/result/UpdateResult';

@ApiTags('chatUser')
@Controller('chatUser')
export class ChatUserController {
  constructor(private chatUsersService: ChatUserService) {}

  @ApiOkResponse({ type: ChatUser, isArray: true })
  @Get('')
  async getAllChatUsers(): Promise<ChatUser[]> {
    return this.chatUsersService.getAllChatUsers();
  }

  @ApiOkResponse({ type: ChatUser, isArray: true })
  @Get(':username')
  async getChatUsersByUsername(
    @Param('username') username: string,
  ): Promise<ChatUser[]> {
    return this.chatUsersService.getChatUsersByUsername(username);
  }

  @ApiOkResponse({ type: ChatUser, isArray: false })
  @Get('one/:username')
  async getOneChatUserByUsername(
    @Param('username') username: string,
  ): Promise<ChatUser> {
    return this.chatUsersService.getOneChatUserByUsername(username);
  }

  // TODO Make it to where this doesn't delete if not full non case sensitive username
  @ApiOkResponse({ type: DeletingResult, isArray: false })
  @Delete('username/:username')
  async deleteChatUserByUsername(
    @Param('username') username: string,
  ): Promise<DeleteResult> {
    return this.chatUsersService.deleteChatUserByUsername(username);
  }

  @ApiOkResponse({ type: DeletingResult, isArray: false })
  @Delete('id/:id')
  async deleteChatUserById(@Param('id') id: string): Promise<DeleteResult> {
    return this.chatUsersService.deleteChatUserById(id);
  }

  @ApiOkResponse({ type: ChatUser, isArray: false })
  @Post('')
  async createChatUser(@Body() chatUser: ChatUser): Promise<ChatUser> {
    return this.chatUsersService.createChatUser(chatUser);
  }

  // TODO add ChatUser to Swagger Type alongside UpdatingResult
  @ApiOkResponse({ type: UpdatingResult, isArray: false })
  @Put('')
  async updateChatUser(
    @Body() chatUser: ChatUser,
  ): Promise<UpdateResult | ChatUser> {
    return this.chatUsersService.updateChatUser(chatUser);
  }
}
