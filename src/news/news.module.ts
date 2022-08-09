import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_AUTH_PASS,
    }),
  ],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
