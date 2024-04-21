import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  private baseUrl = new Configuration().backendUrl + '/verify/';
  constructor() {}

  public async verify(token: string) {
    const response = await fetch(this.baseUrl + token, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
}
