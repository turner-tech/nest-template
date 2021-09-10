import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schemas/game.schema';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game.name) private readonly gameModel: Model<GameDocument>,
  ) {}

  async getAllGames(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  async getGames(name: string): Promise<Game[]> {
    return this.gameModel.find({ name: new RegExp(name, 'i') }).exec();
  }

  async getGame(name: string): Promise<Game> {
    return this.gameModel.findOne({ name: new RegExp(name, 'i') }).exec();
  }

  async deleteGame(name: string): Promise<DeleteResult> {
    return this.gameModel.remove({ name: new RegExp(name, 'i') }).exec();
  }

  async createGame(game: Game): Promise<Game> {
    return this.gameModel.create({ ...game });
  }

  async updateGame(game: Game): Promise<UpdateResult | Game> {
    const gameExists: boolean = await this.getGame(game.name).then(
      (game) => !!game,
    );
    if (gameExists) {
      return this.gameModel.updateOne({ ...game });
    } else {
      return this.createGame(game);
    }
  }
}
