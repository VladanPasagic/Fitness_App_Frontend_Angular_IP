import { Component, Input } from '@angular/core';
import { Article } from '../../Types/article';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() article!: Article;
}
