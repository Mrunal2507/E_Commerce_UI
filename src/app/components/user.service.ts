import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';
import { Role } from './role';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private PATH_OF_API = "http://localhost:8080";
  constructor(
    private httpClient: HttpClient, private router: Router) { }

  public authenticateUser(auth: Auth): Observable<Auth> {
    return this.httpClient.post<Auth>(`${this.PATH_OF_API}/authenticateuser`, auth);
  }

  public signup(auth: Auth): Observable<Auth> {
    return this.httpClient.post<Auth>(`${this.PATH_OF_API}/registerNewUser`, auth);
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem("IsLoggedIn")?.match("true")) {
      return true;
    }
    return false;
  }


  roles1!: Role[];
  public roleMatch(allowedRoles: any): boolean {
    const rolesString: string | null = localStorage.getItem('roles');
    const userRoles: any[] = rolesString ? JSON.parse(rolesString) : [];
    let isMatch = false;
    console.log(allowedRoles);
    console.log(userRoles);
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            console.log("ismatch");
            console.log(userRoles[i].roleName + " " + allowedRoles[j]);
            console.log(isMatch);
            return isMatch;
          }
        }
      }
      return false;
    }
    return false;
  }
  
  public logout() {
    localStorage.clear();
  }

  public getUserByEmailId(emailId: string): Observable<Auth> {
    return this.httpClient.get<Auth>(`${this.PATH_OF_API}/user/${emailId}`);
  }

  public getAllUsers():Observable<Auth[]>{
    return this.httpClient.get<Auth[]>(`${this.PATH_OF_API}/allUsers`);
  }

  public deactivateUser(emailId: string):Observable<void> {
    return this.httpClient.post<void>(`${this.PATH_OF_API}/${emailId}/deactivate`,null);
  }

  public activateUser(emailId: string):Observable<void> {
    return this.httpClient.post<void>(`${this.PATH_OF_API}/${emailId}/activate`,null);
  }

  public getUserStatus(emailId: string):Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.PATH_OF_API}/users/${emailId}/status`);
  }

  updateAuthByEmail(emailId: string, updatedAuth: Auth): Observable<Auth> {
    return this.httpClient.put<Auth>(`${this.PATH_OF_API}/${emailId}`, updatedAuth);
  }
}
