import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../Types/navigation-item';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-single-nav-bar-item',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './single-nav-bar-item.component.html',
  styleUrl: './single-nav-bar-item.component.css',
})
export class SingleNavBarItemComponent {
  @Input() item!: NavigationItem;
}
