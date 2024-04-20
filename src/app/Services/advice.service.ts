import { Injectable, numberAttribute } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { AdviceRequest } from '../Types/advice-request';
import { Util } from '../Util/util';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  private baseUrl = new Configuration().backendUrl + '/advices';

  constructor() {}

  public async sendRequest(request: AdviceRequest): Promise<boolean> {
    request.userId = new Util().getId();
    var response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  }
}
