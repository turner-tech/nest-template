import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HowLongToBeatService } from './how-long-to-beat.service';
import { HowLongToBeatEntry } from 'howlongtobeat';

@ApiTags('HowLongToBeat Info')
@Controller('hltb')
export class HowLongToBeatController {
  constructor(private readonly HLTBService: HowLongToBeatService) {}

  @ApiOkResponse({ type: HowLongToBeatEntry, isArray: true })
  @Get(':game')
  async searchHLTB(@Param('game') game: string): Promise<HowLongToBeatEntry[]> {
    return this.HLTBService.gameSearch(game);
  }

  @ApiOkResponse({ type: HowLongToBeatEntry, isArray: false })
  @Get('details/:gameId')
  async getHLTBDetails(
    @Param('gameId') gameId: string,
  ): Promise<HowLongToBeatEntry> {
    return this.HLTBService.gameDetails(gameId);
  }
}
