import { Injectable } from '@angular/core';
import { Configuration } from '../Configuration/configuration';
import { Chat } from '../Types/chat';
import { Util } from '../Util/util';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private baseUrl = new Configuration().backendUrl + '/chat';
  private messageSent = new BehaviorSubject<boolean>(false);
  constructor() {}

  public async getAllMessages(participant: number) {
    const id = new Util().getId();
    const response = await fetch(this.baseUrl + `/${id}`, {
      method: 'POST',
      body: JSON.stringify({ participant }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  public async sendMessage(message: Chat) {
    message.sender = new Util().getId();
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.messageSent.next(!this.messageSent);
  }

  isMessageSent(): Observable<boolean> {
    return this.messageSent.asObservable();
  }
}
