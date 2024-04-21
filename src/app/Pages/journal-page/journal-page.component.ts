import { Component } from '@angular/core';
import { JournalComponent } from '../../Components/journal/journal.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { KgLossComponent } from '../../Components/kg-loss/kg-loss.component';

@Component({
  selector: 'app-journal-page',
  standalone: true,
  imports: [
    JournalComponent,
    MatButtonModule,
    RouterLink,
    MatSelectModule,
    KgLossComponent,
  ],
  templateUrl: './journal-page.component.html',
  styleUrl: './journal-page.component.css',
})
export class JournalPageComponent {
  public selected = 0;

  public onPrint() {
    window.print();
  }
}
