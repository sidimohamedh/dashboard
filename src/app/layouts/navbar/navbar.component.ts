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
      case '/main/applications':
        return 'Applications';

      case '/main/users':
        return 'Users';

      case '/main/time-invested':
        return 'Time invested';

      default:
        return 'Dashboard';
    }
  }

  setIcon() {
    switch (this.currentRoute) {
      case '/main/applications':
        return 'assets/icons/applications.svg';

      case '/main/users':
        return 'assets/icons/users.svg';

      case '/main/time-invested':
        return 'assets/icons/hourglass-empty.svg';

      default:
        return 'assets/icons/dashboard.svg';
    }
  }
}
