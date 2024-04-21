import { Injectable } from '@angular/core';
import { Util } from '../Util/util';
import { Configuration } from '../Configuration/configuration';
import { Journal } from '../Types/journal';
import { KgLoss } from '../Types/kg-loss';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private baseUrl = new Configuration().backendUrl + '/journals/';
  constructor() {}

  public async getAllJournalEntries(): Promise<Journal[]> {
    let id = new Util().getId();
    let result = await fetch(this.baseUrl + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await result.json();
  }

  public async saveJournalEntry(journal: Journal) {
    let id = new Util().getId();
    let result = await fetch(this.baseUrl + id, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(journal),
      method: 'POST',
    });
  }

  public async getAllKgLossEntries(): Promise<KgLoss[]> {
    let id = new Util().getId();
    let result = await fetch(this.baseUrl + id + '/kg', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await result.json();
  }

  public async saveKgEntry(kgLoss: KgLoss) {
    let id = new Util().getId();
    let result = await fetch(this.baseUrl + id + '/kg', {
      method: 'POST',
      body: JSON.stringify(kgLoss),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
