import { Module } from '@nestjs/common';
import { RandomUserController } from './app/random-user/random-user.controller';
import { RandomUserService } from './app/random-user/random-user.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatUsersModule } from './app/chat-users/chat-users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './app/media-game/game.module';
import { HowLongToBeatModule } from './app/how-long-to-beat/how-long-to-beat.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://' +
        process.env.MONGODB_USER +
        ':' +
        process.env.MONGODB_PASSWORD +
        process.env.MONGODB_HOST +
        '/' +
        process.env.MONGODB_DATABASE +
        '?retryWrites=true&w=majority',
      {
        autoCreate: true,
      },
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChatUsersModule,
    GameModule,
    HowLongToBeatModule,
  ],
  controllers: [RandomUserController],
  providers: [RandomUserService],
})
export class AppModule {}
