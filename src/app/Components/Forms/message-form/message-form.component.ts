import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatService } from '../../../Services/chat.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css',
})
export class MessageFormComponent {
  @Input() participantId!: number;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.form = formBuilder.group({
      message: [null, Validators.required],
    });
  }

  public async sendMessage() {
    var message = this.form.value;
    message.receiver = this.participantId;
    await this.chatService.sendMessage(message);
    this.form.reset();
  }
}
