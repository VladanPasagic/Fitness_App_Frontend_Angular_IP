import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../Services/category.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '../../../Types/category';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fitness-program-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './fitness-program-form.component.html',
  styleUrl: './fitness-program-form.component.css',
})
export class FitnessProgramFormComponent implements OnInit {
  public form: FormGroup;
  public categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required],
      level: [null, Validators.required],
      time: [null, Validators.required],
      location: [null, Validators.required],
      insturctorInformation: [null, Validators.required],
      contactNumber: [null, Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    var categories = await this.categoryService.getAll();
    this.categories.push(...categories);
  }

  public onSubmit() {}
}
