import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Types/registration-request';
import { Configuration } from '../Configuration/configuration';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = new Configuration().backendUrl + '/auth/register';

  constructor() {}

  public async sendRequest(request: RegistrationRequest) {
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: this.toFormData(request),
    });

    if (response.ok) {
      var result = await response.json();
    }
  }

  private toFormData(request: RegistrationRequest): FormData
  {
    const formdata =  new FormData();
    formdata.append('username', request.username);
    formdata.append('mail', request.mail);
    formdata.append('firstName', request.firstName);
    formdata.append('lastName', request.lastName);
    formdata.append('password', request.password);
    formdata.append('city', request.city);
    formdata.append('avatar', request.avatar);
    return formdata;
  }
}
