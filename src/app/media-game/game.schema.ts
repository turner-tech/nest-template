import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @ApiProperty()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  publisher: string;

  @Prop()
  releaseDate: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
