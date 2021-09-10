import { Injectable } from '@nestjs/common';
import { ChatUser, ChatUserDocument } from './chat-user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class ChatUserService {
  constructor(
    @InjectModel(ChatUser.name)
    private readonly chatUserModel: Model<ChatUserDocument>,
  ) {}

  async getAllChatUsers(): Promise<ChatUser[]> {
    return this.chatUserModel.find().exec();
  }

  async getChatUsersByUsername(username: string): Promise<ChatUser[]> {
    return this.chatUserModel
      .find({ username: new RegExp(username, 'i') })
      .exec();
  }

  async getOneChatUserByUsername(username: string): Promise<ChatUser> {
    return this.chatUserModel
      .findOne({ username: new RegExp(username, 'i') })
      .exec();
  }

  async deleteChatUserByUsername(username: string): Promise<DeleteResult> {
    return this.chatUserModel
      .deleteOne({ username: new RegExp(username, 'i') })
      .exec();
  }

  async deleteChatUserById(_id: string): Promise<DeleteResult> {
    return this.chatUserModel.deleteOne({ _id }).exec();
  }

  async createChatUser(chatUser: ChatUser): Promise<ChatUser> {
    return this.chatUserModel.create({ ...chatUser });
  }

  async updateChatUser(chatUser: ChatUser): Promise<UpdateResult | ChatUser> {
    const gameExists: boolean = await this.getOneChatUserByUsername(
      chatUser.username,
    ).then((chatUser) => !!chatUser);
    if (gameExists) {
      return this.chatUserModel.updateOne({ ...chatUser });
    } else {
      return this.createChatUser(chatUser);
    }
  }
}
