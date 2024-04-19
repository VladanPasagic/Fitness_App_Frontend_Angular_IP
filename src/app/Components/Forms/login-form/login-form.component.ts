import { Component, ErrorHandler } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from '../../error/error.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    ErrorComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  public error?: string = '';
  public errorShown = false;

  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,
  ) {
    this.form = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public async onSubmit() {
    var result = await this.service.sendRequest(this.form.value);
    if (result != null) {
      if (result.status == 401) {
        this.errorShown = true;
        this.error = 'Invalid credentials';
      } else if (result.status == 500) {
        this.errorShown = true;
        this.error = 'Server error';
      }
    }
  }
}
