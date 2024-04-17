import { Injectable } from '@angular/core';
import { LoginRequest } from '../Types/login-request';
import { Configuration } from '../Configuration/configuration';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = new Configuration().backendUrl + '/auth/login';

  constructor() {}

  public async sendRequest(request: LoginRequest) {
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request),
      headers:
      {
        "Content-Type":"application/json"
      }
    });

    if (response.ok) {
      var result = await response.json();
      localStorage.setItem('token', result.token);
      localStorage.setItem('id', result.id);
      return null;
    }
    else
    {
      return response;
    }
  }
}
