import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css',
})
export class FileInputComponent {
  @Input() text!: string;
  @Input() value!: File;
  public triggerFileInput() {
    document.getElementById('fileinput')?.click();
  }
}
