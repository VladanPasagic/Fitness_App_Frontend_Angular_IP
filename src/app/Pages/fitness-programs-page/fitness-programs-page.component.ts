import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
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
  public currentPage: number = 0;

  constructor(
    private fitnessProgramService: FitnessProgramService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = new Util().isLoggedIn();
    this.findData(0, 5);
  }

  handlePageEvent(event: PageEvent) {
    this.findData(event.pageIndex, event.pageSize);
  }

  private async findData(page: number, limit: number) {
    this.loggedIn = new Util().isLoggedIn();
    let result;
    if (this.router.url !== '/fitness-program/my') {
      result = await this.fitnessProgramService.getAll(page, limit);
    } else {
      const userId = new Util().getId();
      const result = await this.fitnessProgramService.getAllByCreatorId(
        page,
        limit,
        userId
      );
    }
    this.items = result.content;
    this.items.map((i) => (i.image = new Util().getImageLink(i.image)));
    this.total = result.totalElements;
    this.currentPage = result.pageable.pageNumber;
  }
}
