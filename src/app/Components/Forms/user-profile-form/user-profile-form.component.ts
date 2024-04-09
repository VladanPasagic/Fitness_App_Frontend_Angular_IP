import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.css',
})
export class UserProfileFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      mail: [null, [Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      city: [null, Validators.required],
      avatar: [null],
    });
  }

  ngOnInit(): void {
    // send request to backend and get profile data
    throw new Error('Method not implemented.');
  }

  public onSubmit() {
    //send request to backend to save profile data
  }

  public onCancel() {
    //revert to previous state
  }

  public onChangePassword() {
    // open password modal
  }
}
