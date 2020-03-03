import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>  | Promise<boolean | UrlTree> {
        return true;
    }

}