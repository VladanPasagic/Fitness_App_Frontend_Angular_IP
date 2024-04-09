import { Component } from '@angular/core';
import { UserProfileFormComponent } from '../../Components/Forms/user-profile-form/user-profile-form.component';
import { Util } from '../../Util/util';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [UserProfileFormComponent],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {
  constructor()
  {
  }

}
