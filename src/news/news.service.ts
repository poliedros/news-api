import { Injectable } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Injectable()
export class NewsService {
  constructor(private readonly mongoService: MongoService) {}

  get(): Promise<any> {
    return this.mongoService.find();
  }
}
