import { Module } from '@nestjs/common';
import { HowLongToBeatService } from './how-long-to-beat.service';
import { HowLongToBeatController } from './how-long-to-beat.controller';

@Module({
  imports: [],
  providers: [HowLongToBeatService],
  controllers: [HowLongToBeatController],
})
export class HowLongToBeatModule {}
