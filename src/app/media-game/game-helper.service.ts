import { Game } from './schemas/game.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameHelperService {
  static formAllGamesSchedulerMessage(games: Game[]) {
    console.log('\n--------------------------------------------------------');
    console.log('Running Job to Check for All Games in the Database');
    console.log('Job has finished and has found (' + games.length + ') games');
    console.log('--------------------------------------------------------\n');
  }
}
