import { Injectable, NotFoundException } from '@nestjs/common';
import { SlugModel } from './types.js';
import { slugify } from 'slug-lib';
@Injectable()
export class SlugService {
  private currentId = 1;
  private slugArray: SlugModel[] = [];

  getIndexById(id: number): number {
    const result = this.slugArray.findIndex((slug) => slug.id === id);
    return result;
  }

  createSlug(userString: string): SlugModel {
    const newSlug: SlugModel = {
      id: this.currentId++,
      originalString: userString,
      slug: slugify(userString),
    };
    this.slugArray.push(newSlug);
    return newSlug;
  }

  getSlugs(): SlugModel[] {
    return this.slugArray;
  }

  getOneSlug(id: number): SlugModel {
    const index = this.getIndexById(id);
    if (index === -1) {
      throw new NotFoundException(`Slug with id ${id} not found`);
    }
    return this.slugArray[index];
  }

  deleteSlug(id: number): string {
    const index = this.getIndexById(id);
    if (index === -1) {
      throw new NotFoundException(`Slug with id ${id} not found`);
    }
    this.slugArray.splice(index, 1);
    return `Slug with id ${id} deleted successfully`;
  }
}
