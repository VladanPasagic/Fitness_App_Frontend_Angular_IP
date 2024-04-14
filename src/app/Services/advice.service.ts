import { Injectable, numberAttribute } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { AdviceRequest } from '../Types/advice-request';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  private baseUrl = new Configuration().backendUrl + '/advices';

  constructor() {}

  public async sendRequest(request: AdviceRequest) {
    request.id = Number(localStorage.getItem('id'));
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request)
    });
  }
}
