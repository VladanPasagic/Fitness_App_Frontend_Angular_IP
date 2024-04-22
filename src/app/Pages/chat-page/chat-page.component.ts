import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../Types/user';
import { UserService } from '../../Services/user.service';
import { ChatComponent } from '../../Components/chat/chat.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [MatSelectModule, ChatComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent implements OnInit {
  constructor(private userService: UserService) {}

  selected = -1;

  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getAll();
  }

  users: User[] = [];
}
