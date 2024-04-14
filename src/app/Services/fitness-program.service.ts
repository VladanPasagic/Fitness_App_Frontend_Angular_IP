import { Injectable } from '@angular/core';
import { FitnessProgram } from '../Types/fitness-program';
import { Configuration } from '../Configuration/configuration';

@Injectable({
  providedIn: 'root',
})
export class FitnessProgramService {
  private baseUrl = new Configuration().backendUrl + '/training-programs';
  constructor() {}

  async create(fitnessProgram: FitnessProgram): Promise<void> {
    const response = await fetch(this.baseUrl, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      method: 'POST',
      body: this.toFormData(fitnessProgram),
    });
  }

  async getAll(): Promise<FitnessProgram[]> {
    const response = await fetch(this.baseUrl, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  private toFormData(fitnessProgram: FitnessProgram): FormData {
    return new FormData();
  }
}
