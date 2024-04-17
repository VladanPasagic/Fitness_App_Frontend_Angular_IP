import { Component, OnInit } from '@angular/core';
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
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../Services/user.service';
import { UserProfile } from '../../../Types/user-profile';
import { SuccessComponent } from '../../success/success.component';
import { ErrorComponent } from '../../error/error.component';

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
    SuccessComponent,
    ErrorComponent,
  ],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.css',
})
export class UserProfileFormComponent implements OnInit {
  public form: FormGroup;

  private user?: UserProfile;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = formBuilder.group({
      mail: [null, [Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      city: [null, Validators.required],
      avatar: [null],
    });
  }

  async ngOnInit(): Promise<void> {
    let user: UserProfile = await this.userService.getUser();
    this.user = user;
    if (user != null) {
      this.form.get('mail')!.setValue(user.mail);
      this.form.get('firstName')!.setValue(user.firstName);
      this.form.get('lastName')!.setValue(user.lastName);
      this.form.get('city')!.setValue(user.city);
    }
  }

  public onSubmit() {
    this.userService.update(this.form.value);
  }

  public onCancel() {
    this.form.get('mail')!.setValue(this.user!.mail);
    this.form.get('firstName')!.setValue(this.user!.firstName);
    this.form.get('lastName')!.setValue(this.user!.lastName);
    this.form.get('city')!.setValue(this.user!.city);
  }

  public onChangePassword() {
    // open password modal
  }
}
