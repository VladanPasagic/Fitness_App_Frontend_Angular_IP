import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ParticipationTableEntry } from '../../Types/participation-table-entry';
import { FitnessProgramService } from '../../Services/fitness-program.service';

@Component({
  selector: 'app-participation',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './participation.component.html',
  styleUrl: './participation.component.css',
})
export class ParticipationComponent implements OnInit {
  dataSource: ParticipationTableEntry[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'date'];
  constructor(private fitnessProgramService: FitnessProgramService) {}
  async ngOnInit(): Promise<void> {
    let result = await this.fitnessProgramService.getAllParticipations();
    result.map((value) => {
      this.dataSource?.push(
        new ParticipationTableEntry(
          value.id,
          value.trainingProgram.name,
          value.trainingProgram.price,
          value.date
        )
      );
    });
  }
}
