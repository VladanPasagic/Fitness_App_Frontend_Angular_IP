import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Journal } from '../../Types/journal';
import { JournalService } from '../../Services/journal.service';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css',
})
export class JournalComponent implements OnInit {
  dataSource: Journal[] = [];
  displayedColumns: string[] = ['type', 'duration', 'intensity', 'result'];
  constructor(private journalService: JournalService) {}
  async ngOnInit(): Promise<void> {
    let result = await this.journalService.getAllJournalEntries();
    this.dataSource = result;
  }
}
