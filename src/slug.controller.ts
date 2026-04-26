import {Controller , Get , Post , Delete , Body , Param} from '@nestjs/common';
import { SlugService } from './slug.service';
import { SlugModel } from './types';
@Controller('/api/slug')
export class SlugController {
  constructor(private slugService : SlugService){}
  @Post()
  public createSlug(@Body() body : {userString:string})  {
    return this.slugService.createSlug(body.userString);
  }
  @Get()  
  public getSlugs() : SlugModel[] { 
    return this.slugService.getSlugs();
  }
  @Get(':id')
  public getOneSlug(@Param('id') id : number) /* SlugModel - Question: Why doesn't it work?*/ {
    return this.slugService.getOneSlug(id) ;
  }
  @Delete(':id')
  public deleteSlug(@Param('id') id : number) : string {
    return this.slugService.deleteSlug(id);
  }
}
