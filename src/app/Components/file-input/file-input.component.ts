import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css',
})
export class FileInputComponent {
  @Input() text!: string;
  @Input() formControlNameString!: string;
  @Input() form!: FormGroup;
  @Input() required = false;
  @Output() fileSelected = new EventEmitter<File>();

  public triggerFileInput() {
    document.getElementById('fileinput')?.click();
  }

  public handleFiles(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.fileSelected.emit(file);
      console.log(file);
    }
  }
}
