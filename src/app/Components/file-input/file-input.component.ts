import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css',
})
export class FileInputComponent {
  public triggerFileInput() {
    document.getElementById('fileinput')?.click();
  }
}
