import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramComponent } from '../../Components/fitness-program/fitness-program.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Util } from '../../Util/util';
import { FitnessProgramService } from '../../Services/fitness-program.service';

@Component({
  selector: 'app-fitness-programs-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatPaginatorModule,
    FitnessProgramComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './fitness-programs-page.component.html',
  styleUrl: './fitness-programs-page.component.css',
})
export class FitnessProgramsPageComponent implements OnInit {
  public total!: number;
  public loggedIn!: boolean;
  public items!: FitnessProgram[];

  constructor(private fitnessProgramService: FitnessProgramService) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = new Util().isLoggedIn();
    this.items = await this.fitnessProgramService.getAll();
    console.log(this.items);
    this.items.map(
      (i) => (i.image = new Util().getImageLink(i.image))
    );
    console.log(this.items);
  }
}
