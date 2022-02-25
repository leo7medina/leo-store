import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from './modules/share.module';
import {CoreModule} from './modules/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { QuicklinkModule } from 'ngx-quicklink';
import { ServiceWorkerModule } from '@angular/service-worker';
//import { AngularFireMessagingModule } from '@angular/fire/messaging'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat'
//import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    QuicklinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
