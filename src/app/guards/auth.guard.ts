import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { LoginService } from "../services/login.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.loginService.isLoggedIn) {
            return true;
        } else {
            return this.router.createUrlTree(["/login"]);
        }
    }

}