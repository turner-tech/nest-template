import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from './schemas/game.schema';
import { GameScheduler } from './game.scheduler';
import { GameHelperService } from './game-helper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  providers: [GameService, GameScheduler, GameHelperService],
  controllers: [GameController],
})
export class GameModule {}
