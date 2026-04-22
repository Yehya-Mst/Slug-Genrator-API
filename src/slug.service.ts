import { Injectable, NotFoundException } from '@nestjs/common';
import { SlugModel } from './types';
import { slugify } from "slug-lib";
@Injectable()
export class SlugService {
  
  private currentId = 1;
  private slugArray : SlugModel[] = [];
  
  getInxById(id :string ): number {
     for(let i = 0 ; i < this.slugArray.length ; i++){
      if(id === this.slugArray[i].id){
        return i;
      }
    }
    return -1;
  }
  
  createSlug(str : string) : SlugModel {
    this.slugArray.push({
    id : (this.currentId++).toString(),
    originalString : str,
    slug: slugify(str)
    });
    return this.slugArray[this.slugArray.length-1];
  }
  
  
  getAllSlugs() : SlugModel[] {
    return this.slugArray;
  }
  
  
  getOneSlug(id : string) : SlugModel {
    const index = this.getInxById(id);
    if(index === -1 ){
      throw new NotFoundException(`Slug with id ${id} not found`);
    }
    return this.slugArray[index];
  }


  deleteSlug(id : string) : string {
    const index = this.getInxById(id);
    if(index === -1 ){
      throw new NotFoundException(`Slug with id ${id} not found`);
    }
    this.slugArray.splice(index,1);
    return `Slug with id ${id} deleted successfully`;
  }
}
