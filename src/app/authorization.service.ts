import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private apiUrl = 'http://localhost:5000'; 

  logged = false;
  private signedUp = false;

  hasSignedUp(): boolean {
    return this.signedUp;
  }

  get isLoggedIn(){
    return this.logged;
  }

  loginUser(loginData: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, loginData).pipe(
      tap(() => {
        this.logged = true;
      })
    );
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}/logout`; 
    return this.http.post(url, {}).pipe(
      tap(() => {
        this.logged = false;
        this.router.navigate(['/login']);
      })
    );
  }

  registerUser(formData: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, formData).pipe(
      tap(() => {
        this.signedUp = true;
      })
    );
  }


  
  constructor(private router:Router, private http: HttpClient) {}
}
