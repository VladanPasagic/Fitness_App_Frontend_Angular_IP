import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Util } from '../Util/util';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(new Util().isLoggedIn());

  constructor(private router: Router) {}

  login(token: string, id: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    this.loggedIn.next(true);
    this.router.navigate(['/fitness-program/all']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
