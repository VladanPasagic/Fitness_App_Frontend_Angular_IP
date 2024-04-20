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
import { FileInputComponent } from '../../file-input/file-input.component';
import { FitnessProgramService } from '../../../Services/fitness-program.service';
import { Location } from '../../../Types/location';

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
    FileInputComponent,
  ],
  templateUrl: './fitness-program-form.component.html',
  styleUrl: './fitness-program-form.component.css',
})
export class FitnessProgramFormComponent implements OnInit {
  private selectedImage?: File;
  public form: FormGroup;
  public categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private fitnessProgramService: FitnessProgramService
  ) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required],
      level: [null, Validators.required],
      time: [null, Validators.required],
      locationId: [null, Validators.required],
      address: [null, Validators.required],
      instructorInformation: [null, Validators.required],
      contactNumber: [null, Validators.required],
      image: [undefined],
    });
  }

  async ngOnInit(): Promise<void> {
    var categories = await this.categoryService.getAll();
    this.categories.push(...categories);
  }

  onFileSelected(file: File) {
    if (file != null) {
      this.selectedImage = file;
    }
  }

  public onSubmit() {
    const fitnessProgramInfo = this.form.value;
    delete fitnessProgramInfo.image;
    fitnessProgramInfo.image = this.selectedImage;
    console.log(this.form.value.locationId);
    fitnessProgramInfo.location = new Location();
    fitnessProgramInfo.location.type = this.form.value.locationId;
    fitnessProgramInfo.location.location = this.form.value.address;
    this.fitnessProgramService.create(fitnessProgramInfo);
  }
}
