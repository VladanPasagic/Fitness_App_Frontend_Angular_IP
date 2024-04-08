import { Injectable, numberAttribute } from '@angular/core';
import { Configuration } from '../../Configuration/config';
import { AdviceRequest } from '../Types/advice-request';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  private baseUrl = new Configuration().backendUrl + '/advice';

  constructor() {}

  public async sendRequest(request: AdviceRequest) {
    request.id = Number(localStorage.getItem('id'));
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request)
    });
  }
}
