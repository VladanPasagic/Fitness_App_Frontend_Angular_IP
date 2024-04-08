import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AdviceFormComponent } from '../../Components/Forms/advice-form/advice-form.component';

@Component({
  selector: 'app-advice-page',
  standalone: true,
  imports: [AdviceFormComponent],
  templateUrl: './advice-page.component.html',
  styleUrl: './advice-page.component.css'
})
export class AdvicePageComponent {

}
