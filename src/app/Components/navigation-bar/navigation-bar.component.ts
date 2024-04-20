import { Component, OnInit } from '@angular/core';
import { SingleNavBarItemComponent } from '../single-nav-bar-item/single-nav-bar-item.component';
import { NavigationItem } from '../../Types/navigation-item';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [SingleNavBarItemComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  navItems: NavigationItem[] = [];

  isLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.navItems = [];
      this.updateNavItems();
    });
  }

  private updateNavItems() {
    !this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Login', '/login'));
    !this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Register', '/register'));
    this.navItems.push(new NavigationItem('Fitness plans', '/fitness-program/all'));
    this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Profile', '/profile'));
    this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Journal', '/journal'));
    this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Exercise', '/exercises'));
    this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Get advice', '/advice'));
    this.isLoggedIn &&
      this.navItems.push(new NavigationItem('Logout', '/logout'));
  }
}
