import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdviceService } from '../../../Services/advice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-advice-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './advice-form.component.html',
  styleUrl: './advice-form.component.css',
})
export class AdviceFormComponent {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AdviceService
  ) {
    this.form = formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
    });
  }

  public onSubmit() {
    this.service.sendRequest(this.form.value);
  }
}
