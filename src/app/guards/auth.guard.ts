import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import {  Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { User } from "../models/user.model";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private cookieService: CookieService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const user = this.cookieService.get('user');
        if(user){
            const userObject:User = JSON.parse(user);
            if(userObject.isLoggedIn){
                return true;
            }
        } 
        return this.router.createUrlTree(["/login"]);
    }

}