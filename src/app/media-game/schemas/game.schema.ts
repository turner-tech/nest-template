import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  publisher: string;

  @Prop()
  releaseDate: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
