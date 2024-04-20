export class ParticipationTableEntry {
  id: number;
  name: string;
  price: number;
  date: Date;

  constructor(id: number, name: string, price: number, date: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.date = date;
  }
}
