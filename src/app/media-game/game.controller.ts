import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GameService } from './game.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Game } from './schemas/game.schema';
import { DeleteResult, UpdateResult } from 'mongodb';
import {
  DeleteResult as DeletingResult,
  UpdateResult as UpdatingResult,
} from 'typeorm';

@ApiTags('Get Games')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @ApiOkResponse({ type: Game, isArray: true })
  @Get('')
  async getAllGames(): Promise<Game[]> {
    return this.gameService.getAllGames();
  }

  @ApiOkResponse({ type: Game, isArray: true })
  @Get(':name')
  async getGames(@Param('name') name: string): Promise<Game[]> {
    return this.gameService.getGames(name);
  }

  @ApiOkResponse({ type: Game, isArray: false })
  @Get('one/:name')
  async getGame(@Param('name') name: string): Promise<Game> {
    return this.gameService.getGame(name);
  }

  @ApiOkResponse({ type: DeletingResult, isArray: false })
  @Delete(':name')
  async deleteGame(@Param('name') name: string): Promise<DeleteResult> {
    return this.gameService.deleteGame(name);
  }

  @ApiOkResponse({ type: Game, isArray: false })
  @Post('')
  async createGame(@Body() game: Game): Promise<Game> {
    return this.gameService.createGame(game);
  }

  // TODO add Game to Swagger Type alongside UpdatingResult
  @ApiOkResponse({ type: UpdatingResult, isArray: false })
  @Put('')
  async updateGame(@Body() game: Game): Promise<UpdateResult | Game> {
    return this.gameService.updateGame(game);
  }
}
