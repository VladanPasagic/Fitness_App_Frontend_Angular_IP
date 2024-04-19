import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramComponent } from '../../Components/fitness-program/fitness-program.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(
    private fitnessProgramService: FitnessProgramService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = new Util().isLoggedIn();
    if (this.router.url !== '/fitness-programs/my') {
      this.items = await this.fitnessProgramService.getAll();
      this.items.map((i) => (i.image = new Util().getImageLink(i.image)));
    } else {
      const userId = new Util().getId();
      this.items = await this.fitnessProgramService.getAllByCreatorId(userId);
      this.items.map((i) => (i.image = new Util().getImageLink(i.image)));
    }
  }
}
