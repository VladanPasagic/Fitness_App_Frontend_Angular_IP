import { Component, OnInit } from '@angular/core';
import { SingleNavBarItemComponent } from '../single-nav-bar-item/single-nav-bar-item.component';
import { NavigationItem } from '../../Types/navigation-item';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [SingleNavBarItemComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  navItems: NavigationItem[] = [];

  async ngOnInit(): Promise<void> {
    let loggedIn = localStorage.getItem('token') !== null;
    !loggedIn && this.navItems.push(new NavigationItem('Login', '/login'));
    !loggedIn &&
      this.navItems.push(new NavigationItem('Register', '/register'));
    this.navItems.push(new NavigationItem('Fitness plans', '/fitness-program'));
    loggedIn && this.navItems.push(new NavigationItem('Logout', '/logout'));
  }
}
