import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from './shared/material/material.module';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MainMenuComponent } from './pages/main/main-menu/main-menu.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthService } from './services/auth.service';
import { HotToastModule } from '@ngneat/hot-toast';
import { AuthComponent } from './admin/auth/auth.component';
import { AccountComponent } from './admin/account/account.component';
import { AvatarComponent } from './admin/avatar/avatar.component';
// import { CalendarModule } from 'primeng/calendar';
// import { SupabaseModule } from '@supabase/supabase-js';

// import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
// import { JwtService } from './services/jwt.service';

// export function jwtOptionsFactory(jwtService: JwtService) {
//   return {
//     tokenGetter: () => {
//       return jwtService.getToken();
//     },
//     allowedDomains: ['localhost:4200'] // replace with your domain
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    MainMenuComponent,
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    AuthComponent,
    AccountComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatNativeDateModule,
    HotToastModule.forRoot(),
    // CalendarModule,
    // SupabaseModule.forRoot({
    //   supabaseUrl: 'SUPABASE_URL',
    //   supabaseKey: 'SUPABASE_KEY',
    // }),
    // JwtModule.forRoot({
    //   jwtOptionsProvider:{
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [JwtService]
    //   }
    // })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
