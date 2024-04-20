import { Component } from '@angular/core';
import { JournalComponent } from '../../Components/journal/journal.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journal-page',
  standalone: true,
  imports: [JournalComponent, MatButtonModule, RouterLink],
  templateUrl: './journal-page.component.html',
  styleUrl: './journal-page.component.css',
})
export class JournalPageComponent {
  public onPrint() {
    window.print();
  }
}
