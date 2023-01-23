import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //this shouldn't be here if we had backend
  users = [{ name: "Csilla", password: "csilla123" }, { name: "Mázli", password: "Mázli123" }, { name: "Pistike", password: "Pistike123" }, { name: "Sárika", password: "Sárika123" }]
  constructor(private cookieService: CookieService) { }

  checkUser(userName: string | null, passWord: string | null): boolean {
    /*this whole check should be made via http request:
     we send the username/password with http request (password encripted)
    and get back in response the valid user or error if the user is not valid */
    let userObject: User = {
      name: userName || "",
      password: passWord || "",
      isLoggedIn: false
    }
    const user = this.cookieService.get('user');
    if (user) {
       userObject = JSON.parse(user);
      if (userObject.name === userName && userObject.password === passWord) {
        if (!userObject.isLoggedIn) {
          {
            this.setUserCookie(userObject, userName, passWord);
          }
        }
      } else {
        userObject.name = userName  || "";
        userObject.password = passWord  || "";
        this.setUserCookie(userObject, userName, passWord);
      }
    } else {
      this.setUserCookie(userObject, userName, passWord);
    }
    return userObject.isLoggedIn;
  }

  setUserCookie(userObject: User, userName: string | null, passWord: string | null) {
    const found = this.users.find(user => user.name === userName && user.password === passWord);
    found ? userObject.isLoggedIn = true : userObject.isLoggedIn = false;
    this.cookieService.set('user', JSON.stringify(userObject));
  }
}
