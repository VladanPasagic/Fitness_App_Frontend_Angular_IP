import { Injectable } from '@angular/core';
import { FitnessProgram } from '../Types/fitness-program';
import { Configuration } from '../Configuration/configuration';
import { Util } from '../Util/util';

@Injectable({
  providedIn: 'root',
})
export class FitnessProgramService {
  private baseUrl = new Configuration().backendUrl + '/training-programs';
  constructor() {}

  async create(fitnessProgram: FitnessProgram): Promise<void> {
    const response = await fetch(this.baseUrl, {
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
    let formData = new FormData();
    formData.append('name', fitnessProgram.name);
    formData.append('description', fitnessProgram.description);
    formData.append('categoryId', fitnessProgram.category);
    formData.append('location', fitnessProgram.location);
    formData.append('price', fitnessProgram.price.toString());
    formData.append('level', fitnessProgram.level.toString());
    formData.append('image', fitnessProgram.image);
    formData.append('creator', new Util().getId().toString());
    if (fitnessProgram.instructorInformation != null) {
      formData.append(
        'instructorInformation',
        fitnessProgram.instructorInformation
      );
    }
    if (fitnessProgram.contactNumber != null) {
      formData.append('contactNumber', fitnessProgram.contactNumber);
    }
    return formData;
  }

  async getById(id: number): Promise<FitnessProgram> {
    const response = await fetch(this.baseUrl + '/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
}
