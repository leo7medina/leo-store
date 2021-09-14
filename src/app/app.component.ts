import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core'
import { isPlatformBrowser, isPlatformServer} from '@angular/common'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import { SwUpdate } from '@angular/service-worker'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'

declare var gtag;
interface Token {
  token: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokensCollections: AngularFirestoreCollection<Token>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.tokensCollections = this.database.collection<Token>('tokens');
      const navEndEvent$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

      navEndEvent$.subscribe((event: NavigationEnd) => {
        gtag('config', 'G-N72GF8YW31', { page_path: event.urlAfterRedirects });
      });
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updatePWA();
      this.requestPermission();
      this.listenNotifications();
    }
  }


  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      console.log('update: ' + value);
      window.location.reload();
    })
  }

  requestPermission() {
    this.messaging.requestToken.subscribe(token => {
      console.log('token')
      console.log(token);
      this.tokensCollections.add({token});
    });
  }

  listenNotifications() {
    this.messaging.messages.subscribe(message => {
      console.log(message);
    });
  }
}
