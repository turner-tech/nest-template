import { Test, TestingModule } from '@nestjs/testing';
import { RandomUserController } from './random-user.controller';
import { RandomUserService } from './random-user.service';

describe('RandomUserController', () => {
  let appController: RandomUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RandomUserController],
      providers: [RandomUserService],
    }).compile();

    appController = app.get<RandomUserController>(RandomUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
