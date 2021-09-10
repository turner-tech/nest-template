import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatUserDocument = ChatUser & Document;

@Schema()
export class ChatUser {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  @Prop()
  username: string;

  @ApiProperty()
  @Prop()
  valid: boolean;

  @ApiProperty()
  @Prop()
  online: boolean;
}

export const ChatUserSchema = SchemaFactory.createForClass(ChatUser);
