import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Types/registration-request';
import { Configuration } from '../../Configuration/config';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = new Configuration().backendUrl + '/auth/register';

  constructor() {}

  public async sendRequest(request: RegistrationRequest) {
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      var result = await response.json();
    }
  }
}
