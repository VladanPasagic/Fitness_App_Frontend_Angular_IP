import { Component, OnInit } from '@angular/core';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramService } from '../../Services/fitness-program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Util } from '../../Util/util';
import { CommentFormComponent } from '../../Components/Forms/comment-form/comment-form.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-fitness-program-page',
  standalone: true,
  imports: [MatCardModule, CommentFormComponent, MatButton],
  templateUrl: './fitness-program-page.component.html',
  styleUrl: './fitness-program-page.component.css',
})
export class FitnessProgramPageComponent implements OnInit {
  public loggedInUserId?: number;
  public fitnessProgram?: FitnessProgram;
  private id!: number;
  constructor(
    private fitnessProgramService: FitnessProgramService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    if (new Util().isLoggedIn()) {
      this.loggedInUserId = new Util().getId();
    }
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.fitnessProgram = await this.fitnessProgramService.getById(this.id);
    if (this.fitnessProgram == undefined) {
      this.router.navigate(['../fitness-program']);
      console.log('somethign');
      return;
    }
    this.fitnessProgram.image = new Util().getImageLink(
      this.fitnessProgram.image
    );
    console.log(this.fitnessProgram);
  }

  async onDelete()
  {

  }

  async onParticipate()
  {
    
  }
}
