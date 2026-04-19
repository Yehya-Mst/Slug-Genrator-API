import { Module } from '@nestjs/common';
import { SlugService } from './slug.service';


@Module({
  imports: [],
  providers: [SlugService],
})
export class AppModule {}
