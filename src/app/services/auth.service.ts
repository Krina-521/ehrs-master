import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // TODO: call your authentication API to get a token
    // const token = this.jwtService.generateToken({ username: username });
    const token = 'hello';
    localStorage.setItem('auth_token', token);
    return of(true);
  }
  signUp(name: string, email: string, password: string): Observable<boolean> {
    // Backend API call
    return of(true);
  }

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }

  forgotPassword(email: string) {}

  signInWithGoogle() {}

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        // this.jwtService.decodeToken(token);
        return true;
      } catch (err) {
        // token is invalid
        return false;
      }
    }
    return false;
  }
}
