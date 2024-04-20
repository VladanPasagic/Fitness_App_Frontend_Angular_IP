import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from '../../file-input/file-input.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterService } from '../../../Services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FileInputComponent,
    MatButtonModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  public form: FormGroup;
  public passwordMatch: boolean = true;
  private selectedAvatar?: File;
  constructor(
    private formBuilder: FormBuilder,
    private service: RegisterService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      mail: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      password2: [null, Validators.required],
      username: [null, Validators.required],
      city: [null, Validators.required],
      image: [undefined],
    });
  }
  public onSubmit() {
    const registerInfo = this.form.value;
    delete registerInfo.password2;
    registerInfo.avatar = this.selectedAvatar;
    this.service.sendRequest(registerInfo);
    this.router.navigate(['/login']);
  }

  public checkPassword() {
    if (this.form.get('password')!.value !== this.form.get('password2')!.value)
      this.passwordMatch = false;
    else this.passwordMatch = true;
  }

  onFileSelected(file: File) {
    if (file != null) {
      this.selectedAvatar = file;
    }
  }
}
