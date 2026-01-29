import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentRoute = 'Dashboard';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  setTitle(): string {
    switch (this.currentRoute) {
      case '/applications':
        return 'Applications';

      case '/users':
        return 'Users';

      case '/time-invested':
        return 'Time invested';

      default:
        return 'Dashboard';
    }
  }

  setIcon() {
    switch (this.currentRoute) {
      case '/applications':
        return 'assets/icons/applications.svg';

      case '/users':
        return 'assets/icons/users.svg';

      case '/time-invested':
        return 'assets/icons/hourglass-empty.svg';

      default:
        return 'assets/icons/dashboard.svg';
    }
  }
}
