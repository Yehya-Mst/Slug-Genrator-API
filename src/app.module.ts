import { Injectable, Module } from '@nestjs/common';
import { SlugService } from './slug.service.js';
import { SlugController } from './slug.controller.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PrismaService } from './prisma/prisma.service.js';
@Module({
  imports: [PrismaModule],
  controllers: [SlugController],
  providers: [SlugService, PrismaService],
})
export class AppModule {}
