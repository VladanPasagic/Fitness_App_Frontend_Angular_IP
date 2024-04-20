export class Journal {
  type: string;
  duration: number;
  intensity: any;
  result: number;

  constructor(
    type: string,
    duration: number,
    intensity: string,
    result: number
  ) {
    this.type = type;
    this.duration = duration;
    this.intensity = intensity;
    this.result = result;
  }
}
