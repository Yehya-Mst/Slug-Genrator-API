import {Controller , Get , Post , Delete , Body , Param} from '@nestjs/common';
import { SlugService } from './slug.service';
import { SlugModel } from './types';
@Controller('/api/slug')
export class SlugController {
  constructor(private slugService : SlugService){}
  @Post()
  public createSlug(@Body() body : {str:string})  {
    return this.slugService.createSlug(body.str);
  }
  @Get()
  public getAllSlugs() : SlugModel[] { 
    return this.slugService.getAllSlugs();
  }
  @Get(':id')
  public getOneSlug(@Param('id') id : string) /* SlugModel - Question: Why doesn't it work?*/ {
    return this.slugService.getOneSlug(id) ;
  }
  @Delete(':id')
  public deleteSlug(@Param('id') id : string) : string {
    return this.slugService.deleteSlug(id);
  }
}