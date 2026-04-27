import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { SlugService } from './slug.service';
import type { SlugModel } from './types';
@Controller('/api/slug')
export class SlugController {
  constructor(private slugService: SlugService) {}
  @Post()
  public createSlug(@Body() body: { userString: string }) {
    return this.slugService.createSlug(body.userString);
  }
  @Get()
  public getSlugs(): SlugModel[] {
    return this.slugService.getSlugs();
  }
  @Get(':id')
  public getOneSlug(@Param('id') id: string): SlugModel {
    return this.slugService.getOneSlug(Number(id));
  }
  @Delete(':id')
  public deleteSlug(@Param('id') id: string): string {
    return this.slugService.deleteSlug(Number(id));
  }
}
