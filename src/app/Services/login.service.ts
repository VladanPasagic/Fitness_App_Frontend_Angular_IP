import { Injectable } from '@angular/core';
import { LoginRequest } from '../Types/login-request';
import { Configuration } from '../Configuration/configuration';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = new Configuration().backendUrl + '/auth/login';

  constructor(private authService:AuthenticationService) {}

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
      this.authService.login(result.token, result.id);
      return null;
    }
    else
    {
      return response;
    }
  }
}
