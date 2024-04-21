export class Journal {
  type: string;
  duration: number;
  intensity: any;
  result: number;
  date: Date;

  constructor(
    type: string,
    duration: number,
    intensity: string,
    result: number,
    date: Date
  ) {
    this.type = type;
    this.duration = duration;
    this.intensity = intensity;
    this.result = result;
    this.date = date;
  }
}
