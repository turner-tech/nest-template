import { Module } from '@nestjs/common';
import { RandomUserController } from './app/random-user/random-user.controller';
import { RandomUserService } from './app/random-user/random-user.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatUsersModule } from './app/chat-users/chat-users.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
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
  ],
  controllers: [RandomUserController],
  providers: [RandomUserService],
})
export class AppModule {}
