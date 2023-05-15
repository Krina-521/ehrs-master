import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonorComponent } from './blood-donor.component';

const bloodDonor_routes: Routes = [
  {
    path: '',
    component: BloodDonorComponent,
    // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
    // , children: [
    //   { path: '', component: DashboardComponent},
    //   // { path: 'dashboard', component: DashboardComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(bloodDonor_routes)],
  exports: [RouterModule],
  providers: [],
})
export class BloodDonorRoutingModule {}
