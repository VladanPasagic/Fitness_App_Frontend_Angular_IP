import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramComponent } from '../../Components/fitness-program/fitness-program.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fitness-programs-page',
  standalone: true,
  imports: [MatButtonModule, MatPaginatorModule, FitnessProgramComponent, RouterLink, RouterOutlet],
  templateUrl: './fitness-programs-page.component.html',
  styleUrl: './fitness-programs-page.component.css',
})
export class FitnessProgramsPageComponent implements OnInit {
  public total!: number;
  public loggedIn!: boolean;
  public items!: FitnessProgram[];

  ngOnInit(): void {
    
  }


}
