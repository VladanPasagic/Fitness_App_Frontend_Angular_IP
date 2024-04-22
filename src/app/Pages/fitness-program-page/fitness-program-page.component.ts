import { Component, OnInit } from '@angular/core';
import { FitnessProgram } from '../../Types/fitness-program';
import { FitnessProgramService } from '../../Services/fitness-program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Util } from '../../Util/util';
import { CommentFormComponent } from '../../Components/Forms/comment-form/comment-form.component';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Comment } from '../../Types/comment';
import { CommentComponent } from '../../Components/comment/comment.component';
import { CommentService } from '../../Services/comment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from '../../Components/payment/payment.component';

@Component({
  selector: 'app-fitness-program-page',
  standalone: true,
  imports: [
    MatCardModule,
    CommentFormComponent,
    MatButton,
    MatListModule,
    CommentComponent,
    ReactiveFormsModule,
    PaymentComponent,
  ],
  templateUrl: './fitness-program-page.component.html',
  styleUrl: './fitness-program-page.component.css',
})
export class FitnessProgramPageComponent implements OnInit {
  public loggedInUserId?: number;
  public fitnessProgram?: FitnessProgram;
  private id!: number;
  public participationShown: boolean = false;
  constructor(
    private fitnessProgramService: FitnessProgramService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {}

  public comments!: Comment[];

  async ngOnInit(): Promise<void> {
    if (new Util().isLoggedIn()) {
      this.loggedInUserId = new Util().getId();
    }
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.fitnessProgram = await this.fitnessProgramService.getById(this.id);
    if (this.fitnessProgram == undefined) {
      this.router.navigate(['../fitness-program/all']);
      return;
    }
    this.fitnessProgram.image = new Util().getImageLink(
      this.fitnessProgram.image
    );
    this.comments = await this.commentService.getAll(this.fitnessProgram.id);
  }

  onParticipateShown() {
    this.participationShown = true;
  }

  async onDelete() {}

  async onParticipate() {
    await this.fitnessProgramService.participate(this.id);
    this.participationShown = false;
  }
}
