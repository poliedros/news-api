import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';

@Module({
  imports: [NewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
