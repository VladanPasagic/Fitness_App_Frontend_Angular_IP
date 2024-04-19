import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Exercise } from '../Types/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private baseUrl = new Configuration().backendUrl + '/api-ninja';

  constructor() {}

  public async getExercises(): Promise<Exercise[]> {
    const response = await fetch(this.baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  }
}
