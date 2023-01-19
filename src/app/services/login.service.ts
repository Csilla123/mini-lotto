import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  //this shouldn't be here if we had backend
  users = [{ name: "Csilla", password: "csilla123" }, { name: "Mázli", password: "Mázli123" }, { name: "Pistike", password: "Pistike123" }, { name: "Sárika", password: "Sárika123" }]
  constructor() { }

  checkUser(userName: string | null, passWord: string | null): boolean {
    /*this whole check should be made via http request:
     we send the username/password with http request (password encripted)
    and get back in response the valid user or error if the user is not valid */
    const found = this.users.find(user => user.name === userName && user.password === passWord);
    found ? this.isLoggedIn = true : this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
