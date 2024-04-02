import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Types/registration-request';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  public sendRequest(request: RegistrationRequest)
  {
    console.log(request);
  }
}
