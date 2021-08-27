import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer} from '@angular/common'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router)
  {
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvent$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

      navEndEvent$.subscribe((event: NavigationEnd) => {
        gtag('config', 'G-N72GF8YW31', { page_path: event.urlAfterRedirects });
      });
    }

  }

}
