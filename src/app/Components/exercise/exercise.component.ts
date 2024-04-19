import { Component, Input } from '@angular/core';
import { Exercise } from '../../Types/exercise';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
})
export class ExerciseComponent {
  @Input() item!: Exercise;
}
