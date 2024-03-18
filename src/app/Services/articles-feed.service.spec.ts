import { TestBed } from '@angular/core/testing';

import { ArticlesFeedService } from './articles-feed.service';

describe('ArticlesFeedService', () => {
  let service: ArticlesFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
