import { Component, OnInit } from '@angular/core';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramService } from '../../Services/fitness-program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fitness-program-page',
  standalone: true,
  imports: [],
  templateUrl: './fitness-program-page.component.html',
  styleUrl: './fitness-program-page.component.css',
})
export class FitnessProgramPageComponent implements OnInit {
  public fitnessProgram!: FitnessProgram;
  private id!: number;
  constructor(
    private fitnessProgramService: FitnessProgramService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.fitnessProgram = await this.fitnessProgramService.getById(this.id);
    console.log(this.fitnessProgram);
  }
}
