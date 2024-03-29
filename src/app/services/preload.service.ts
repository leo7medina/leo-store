import { PreloadingStrategy, Route } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of();
    }
  }
}
