import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Journal } from '../../Types/journal';
import { JournalService } from '../../Services/journal.service';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [MatTableModule, LineChartComponent],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css',
})
export class JournalComponent implements OnInit {
  public data: any[] = [];
  public labels: any[] = [];
  dataSource: Journal[] = [];
  displayedColumns: string[] = [
    'type',
    'duration',
    'intensity',
    'result',
    'date',
  ];
  constructor(private journalService: JournalService) {}
  async ngOnInit(): Promise<void> {
    let result = await this.journalService.getAllJournalEntries();
    this.dataSource = result;
    this.dataSource.map((entry) => {
      console.log(entry);
      this.data.push(entry.result);
      this.labels.push(entry.date);
    });
  }
}
