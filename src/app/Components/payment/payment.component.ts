import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FitnessProgramService } from '../../Services/fitness-program.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  @Output() participate: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  public cashSelected: boolean = false;
  public cardSelected: boolean = false;
  public paypalSelected: boolean = false;
  public paymentIsSelected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private fitnessProgramService: FitnessProgramService
  ) {
    this.form = formBuilder.group({
      select: [null],
      cardNumber: [null, [Validators.required, Validators.maxLength(16)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  paymentSelected() {
    this.paymentIsSelected = true;
    this.cardSelected = false;
    this.cashSelected = false;
    this.paypalSelected = false;
    switch (this.form.value.select) {
      case 0:
        this.cardSelected = true;
        break;
      case 1:
        this.cashSelected = true;
        break;
      case 2:
        this.paypalSelected = true;
        break;
    }
  }

  public onParticipate() {
    this.participate.emit();
  }
}
