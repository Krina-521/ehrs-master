import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { map, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getErrorMessage(){
    return this.loginForm.controls['email'].hasError('required') ? 'You must enter a email':
            this.loginForm.controls['email'].hasError('required') ? 'Not a valid email':
            '';
  }

  login() {
    if (this.email == '') {
      alert('Please enter email address');
      return;
    }
    if (this.password == '') {
      alert('Please enter email address');
      return;
    }
    this.authService.login(this.email, this.password);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .pipe(
        map((isLoggedIn: boolean) => {
          this.toast.observe({
            success: 'Congrats! You are all signed up',
            loading: 'Signing in...',
            // error: ({ message }) => `${message}`,
          });
          this.router.navigate(['/home']);
          this.isLoggedIn = isLoggedIn;
          return of(null);
        })
      )
      .subscribe();
  }
}
