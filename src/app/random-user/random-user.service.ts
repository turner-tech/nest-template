import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { RandomUser } from './random-user-model';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RandomUserService {
  constructor(private httpService: HttpService) {}
  getUser(): Observable<RandomUser[]> {
    return this.httpService
      .get('https://api.randomuser.me/')
      .pipe(map((randomData) => randomData.data.results));
  }
}
