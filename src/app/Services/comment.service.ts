import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = new Configuration().backendUrl + 'training-programs';
  constructor() {}

  public async sendComment(fitnessProgramId: number, message: string) {
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
