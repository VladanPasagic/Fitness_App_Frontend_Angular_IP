import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Article } from '../Types/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesFeedService {
  constructor() {}
  baseUrl = new Configuration().backendUrl + '/facts';

  async getFeed(): Promise<Article[]> {
    const data = await fetch(this.baseUrl, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data.json();
  }
}
