import {
  HowLongToBeatService as HLTBService,
  HowLongToBeatEntry,
} from 'howlongtobeat';

export class HowLongToBeatService {
  private hLTBService = new HLTBService();

  async gameSearch(game: string): Promise<HowLongToBeatEntry[]> {
    return this.hLTBService.search(game);
  }

  async gameDetails(gameId: string): Promise<HowLongToBeatEntry> {
    return this.hLTBService.detail(gameId);
  }
}
