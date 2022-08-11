import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @CacheTTL(900)
  @UseInterceptors(CacheInterceptor)
  get() {
    return this.newsService.get();
  }
}
