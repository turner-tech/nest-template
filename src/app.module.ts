import { Module } from '@nestjs/common';
import { RandomUserController } from './app/random-user/random-user.controller';
import { RandomUserService } from './app/random-user/random-user.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [RandomUserController],
  providers: [RandomUserService],
})
export class AppModule {}
