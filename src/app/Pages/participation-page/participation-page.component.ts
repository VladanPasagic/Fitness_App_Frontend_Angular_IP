import { Component, OnInit } from '@angular/core';
import { ParticipationComponent } from '../../Components/participation/participation.component';

@Component({
  selector: 'app-participation-page',
  standalone: true,
  imports: [ParticipationComponent],
  templateUrl: './participation-page.component.html',
  styleUrl: './participation-page.component.css',
})
export class ParticipationPageComponent{
  constructor() {}
}
