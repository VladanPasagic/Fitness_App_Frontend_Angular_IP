import { Component, OnInit } from '@angular/core';
import { ExerciseComponent } from '../../Components/exercise/exercise.component';
import { Exercise } from '../../Types/exercise';
import { ExerciseService } from '../../Services/exercise.service';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  imports: [ExerciseComponent],
  templateUrl: './exercise-page.component.html',
  styleUrl: './exercise-page.component.css',
})
export class ExercisePageComponent implements OnInit {
  public items!: Exercise[];
  constructor(private exerciseService: ExerciseService) {}

  async ngOnInit(): Promise<void> {
    this.items = await this.exerciseService.getExercises();
  }
}
