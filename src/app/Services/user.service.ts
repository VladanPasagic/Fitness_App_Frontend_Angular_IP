import { Injectable } from '@angular/core';
import { UserProfile } from '../Types/user-profile';
import { Configuration } from '../Configuration/configuration';
import { Util } from '../Util/util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = new Configuration().backendUrl + '/profile/';

  constructor() {}

  public async getUser(): Promise<UserProfile> {
    let id = new Util().getId();
    const data = await fetch(this.baseUrl + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await data.json();
  }

  public async update(user: UserProfile): Promise<void> {
    let id = new Util().getId();
    const data = await fetch(this.baseUrl + id, {
      method: 'POST',
      body: this.toFormData(user),
    });
  }

  private toFormData(user: UserProfile): FormData {
    let formData = new FormData();
    formData.append('id', new Util().getId().toString());
    formData.append('mail', user.mail);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('city', user.city);
    if (user.avatar != null) {
      formData.append('avatar', user.avatar);
    }
    return formData;
  }
}
