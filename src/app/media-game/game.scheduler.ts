import { Injectable } from '@nestjs/common';
import { GameService } from './game.service';
import { Cron } from '@nestjs/schedule';
import { GameHelperService } from './game-helper.service';

@Injectable()
export class GameScheduler {
  constructor(private readonly gameService: GameService) {}

  @Cron(process.env.GAMESCHEDULER_GET_ALL_GAME_CRON || '')
  async getAllGames() {
    GameHelperService.formAllGamesSchedulerMessage(
      await this.gameService.getAllGames(),
    );
  }
}
