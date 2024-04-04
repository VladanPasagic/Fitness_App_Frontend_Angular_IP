import { Component, Input } from '@angular/core';
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

  public triggerFileInput() {
    document.getElementById('fileinput')?.click();
    console.log(this.form.value.avatar);
  }
}
