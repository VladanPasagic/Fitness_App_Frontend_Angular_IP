import { Time } from '@angular/common';

export interface FitnessProgram {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  level: number;
  time: Time;
  location: string;
  image: any;
  instructorInformation: string;
  contactNumber: string;
}
