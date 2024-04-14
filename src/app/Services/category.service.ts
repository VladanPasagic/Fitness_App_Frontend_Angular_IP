import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Category } from '../Types/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = new Configuration().backendUrl + '/categories';
  constructor() {}

  async getAll(): Promise<Category[]> {
    const data = await fetch(this.baseUrl, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data.json();
  }
}
