import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../Services/journal.service';
import { MatTableModule } from '@angular/material/table';
import { KgLoss } from '../../Types/kg-loss';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-kg-loss',
  standalone: true,
  imports: [MatTableModule, LineChartComponent],
  templateUrl: './kg-loss.component.html',
  styleUrl: './kg-loss.component.css',
})
export class KgLossComponent implements OnInit {
  data:any[] = [];
  labels:any[] = [];
  dataSource: KgLoss[] = [];
  displayedColumns: string[] = ['kg', 'date'];
  constructor(private kgLossService: JournalService) {}
  async ngOnInit(): Promise<void> {
    this.dataSource = await this.kgLossService.getAllKgLossEntries();
    this.dataSource.map(entry=>
      {
        this.data.push(entry.kg);
        this.labels.push(entry.date);
      }
    )
  }
}
