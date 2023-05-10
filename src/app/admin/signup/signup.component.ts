import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { map, of } from 'rxjs';
import { passwordsMatchValidator } from 'src/app/utils/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private fb: NonNullableFormBuilder
  ) {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  submit() {
    if (!this.signUpForm.valid) return;

    const { name, email, password } = this.signUpForm.value;
    if (!!name && !!email && !!password) {
      this.authService
        .signUp(name, email, password)
        .pipe(
          map((isSignInSuccessful) => {
            this.toast.observe({
              success: 'Congrats! You are all signed up',
              loading: 'Signing in...',
              error: ({ message }) => `${message}`,
            });
            this.router.navigate(['/home']);
          })
        )
        .subscribe();
    }
  }
}
