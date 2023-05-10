import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const profile_routes: Routes = [
  {path: '', component: ProfileComponent,
  // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
  // , children: [
  //   { path: '', component: DashboardComponent},
  //   // { path: 'dashboard', component: DashboardComponent}
  // ]
}
]

@NgModule({
  imports: [RouterModule.forChild(profile_routes)],
  exports: [RouterModule],
  providers: [],
})

export class ProfileRoutingModule {
}
