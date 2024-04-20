import { Injectable } from '@angular/core';
import { FitnessProgram } from '../Types/fitness-program';
import { Configuration } from '../Configuration/configuration';
import { Util } from '../Util/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FitnessProgramService {
  private baseUrl = new Configuration().backendUrl + '/training-programs';

  constructor(private router: Router) {}

  async create(fitnessProgram: FitnessProgram): Promise<void> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      body: this.toFormData(fitnessProgram),
    });
    if (response.ok) {
      this.router.navigate(['../fitness-program/all']);
    }
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
    formData.append('locationId', fitnessProgram.location.id.toString());
    formData.append('locationName', fitnessProgram.location.location);
    formData.append('price', fitnessProgram.price.toString());
    formData.append('level', fitnessProgram.level.toString());
    formData.append('image', fitnessProgram.image);
    formData.append('creatorId', new Util().getId().toString());
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

  async getById(id: number): Promise<FitnessProgram | undefined> {
    const response = await fetch(this.baseUrl + '/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return undefined;
    }
  }

  async getAllByCreatorId(userId: number): Promise<FitnessProgram[]> {
    const response = await fetch(this.baseUrl + '/creator/' + userId, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    }
    return [];
  }

  async participate(trainingProgramId: number) {
    let request = { userId: new Util().getId() };
    const response = await fetch(
      this.baseUrl + `/participate/${trainingProgramId}`,
      {
        body: JSON.stringify(request),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  async getAllParticipations(): Promise<any[]> {
    const response = await fetch(
      this.baseUrl + '/participate/' + new Util().getId(),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.json();
  }
}
