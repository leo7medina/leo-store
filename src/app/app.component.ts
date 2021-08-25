import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    const navEndEvent$ = this.router.events.pipe(filter( event => event instanceof NavigationEnd));

    navEndEvent$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-N72GF8YW31', {page_path: event.urlAfterRedirects});
    });

  }

}
