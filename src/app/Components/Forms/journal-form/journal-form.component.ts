import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JournalService } from '../../../Services/journal.service';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journal-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './journal-form.component.html',
  styleUrl: './journal-form.component.css',
})
export class JournalFormComponent {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private journalService: JournalService
  ) {
    this.form = formBuilder.group({
      type: [null, Validators.required],
      duration: [null, Validators.required],
      intensity: [null, Validators.required],
      result: [null, Validators.required],
    });
  }

  public async onSubmit() {
    await this.journalService.saveJournalEntry(this.form.value);
    this.form.markAsPristine();
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
  }
}