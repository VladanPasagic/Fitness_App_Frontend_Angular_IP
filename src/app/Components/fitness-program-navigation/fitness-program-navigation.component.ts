import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../Types/navigation-item';
import { AuthenticationService } from '../../Services/authentication.service';
import { SingleNavBarItemComponent } from '../single-nav-bar-item/single-nav-bar-item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fitness-program-navigation',
  standalone: true,
  imports: [SingleNavBarItemComponent, RouterOutlet],
  templateUrl: './fitness-program-navigation.component.html',
  styleUrl: './fitness-program-navigation.component.css',
})
export class FitnessProgramNavigationComponent implements OnInit {
  navItems: NavigationItem[] = [];

  isShown: boolean = false;

  isLoggedIn: boolean = false;
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.updateNavItems();
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.isShown = loggedIn;
    });
  }

  private updateNavItems() {
    this.navItems.push(new NavigationItem('All', 'all'));
    this.navItems.push(new NavigationItem('My Fitness Plans', 'my'));
    this.navItems.push(
      new NavigationItem('Participated plans', 'participated')
    );
  }
}
