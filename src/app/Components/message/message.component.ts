import { Component, Input } from '@angular/core';
import { Chat } from '../../Types/chat';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  @Input() message!: Chat;
}
