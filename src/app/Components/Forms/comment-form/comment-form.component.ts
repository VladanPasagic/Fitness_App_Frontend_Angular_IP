import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommentService } from '../../../Services/comment.service';
import { Util } from '../../../Util/util';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  @Input() trainingProgramId!: number;
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService
  ) {
    this.form = formBuilder.group({
      comment: [null, Validators.required],
    });
  }

  public onSubmit() {
    let commentData = this.form.value;
    commentData.userId = new Util().getId();
    this.commentService.sendComment(this.trainingProgramId, this.form.value);
  }
}
