import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>  | Promise<boolean | UrlTree> {
        return this.authService.hasUser().pipe(
            map(user => user === null ? false : true),
            tap(hasUser => {
                if (!hasUser) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }

}