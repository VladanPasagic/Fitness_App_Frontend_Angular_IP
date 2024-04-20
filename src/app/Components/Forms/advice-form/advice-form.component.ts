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
import { SuccessComponent } from '../../success/success.component';
import { ErrorComponent } from '../../error/error.component';

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
    SuccessComponent,
    ErrorComponent,
  ],
  templateUrl: './advice-form.component.html',
  styleUrl: './advice-form.component.css',
})
export class AdviceFormComponent {
  public successShown = false;
  public errorShown = false;
  public success = '';
  public error = '';

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

  public async onSubmit() {
    let result = await this.service.sendRequest(this.form.value);
    if (result) {
      this.errorShown = false;
      this.successShown = true;
      this.success = 'Successfully sent question!';
      this.form.reset();
    } else {
      this.successShown = false;
      this.errorShown = true;
      this.error = 'Error occured';
    }
  }
}
