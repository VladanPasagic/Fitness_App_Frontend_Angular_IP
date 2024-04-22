import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { Chat } from '../../Types/chat';
import { MessageComponent } from '../message/message.component';
import { MessageFormComponent } from '../Forms/message-form/message-form.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, MessageFormComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() participant!: number;
  messages: Chat[] = [];
  constructor(private chatService: ChatService) {}
  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await this.getMessages();
  }

  async ngOnInit(): Promise<void> {
    await this.getMessages();
    this.chatService.isMessageSent().subscribe((messageSent) => {
      this.getMessages();
    });
  }

  async getMessages() {
    this.messages = await this.chatService.getAllMessages(this.participant);
  }
}
