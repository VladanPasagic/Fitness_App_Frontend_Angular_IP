import { Time } from '@angular/common';
import { Location } from './location';

export interface FitnessProgram {
  id: number;
  name: string;
  description: string;
  category: any;
  price: number;
  level: number;
  time: Time;
  location: Location;
  image: any;
  instructorInformation: string;
  contactNumber: string;
  creator: any;
}
