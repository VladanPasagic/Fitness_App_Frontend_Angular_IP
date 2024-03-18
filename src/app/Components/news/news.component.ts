import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticlesFeedService } from '../../Services/articles-feed.service';
import { Article } from '../../Types/article';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  articlesList: Article[] = [];
  constructor(private articlesFeedService: ArticlesFeedService) {}

  ngOnInit(): void {
    const rssFeedUrl = 'https://feeds.feedburner.com/AceFitFacts';
  }
}
