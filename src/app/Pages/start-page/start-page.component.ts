import { Component } from '@angular/core';
import { NewsComponent } from '../../Components/news/news.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [NewsComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css',
})
export class StartPageComponent {}
