import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../Types/navigation-item';

@Component({
  selector: 'app-single-nav-bar-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-nav-bar-item.component.html',
  styleUrl: './single-nav-bar-item.component.css',
})
export class SingleNavBarItemComponent {
  @Input() item!: NavigationItem;
}
