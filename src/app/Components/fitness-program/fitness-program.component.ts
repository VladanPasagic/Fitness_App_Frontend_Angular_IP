import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FitnessProgram } from '../../Types/fitness-program';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fitness-program',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './fitness-program.component.html',
  styleUrl: './fitness-program.component.css',
})
export class FitnessProgramComponent {
  @Input() item!: FitnessProgram;
}
