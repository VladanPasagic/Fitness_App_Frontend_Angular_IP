import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Util } from '../Util/util';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = new Configuration().backendUrl + '/training-programs';
  constructor() {}

  public async sendComment(fitnessProgramId: number, message: string) {
    console.log(JSON.stringify(message));
    const response = await fetch(
      this.baseUrl + '/' + fitnessProgramId + '/comments',
      {
        body: JSON.stringify(message),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
