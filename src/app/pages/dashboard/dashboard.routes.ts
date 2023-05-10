import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BedsComponent } from './beds/beds.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';

const dashboard_routes: Routes = [
  {path: '', component: DashboardComponent,
  // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
  // , children: [
  //   { path: '', component: DashboardComponent},
  //   // { path: 'dashboard', component: DashboardComponent}
  // ]
  },
  { path: 'beds', component: BedsComponent},
  { path: 'blood-bank', component: BloodBankComponent}
]

@NgModule({
  imports: [RouterModule.forChild(dashboard_routes)],
  exports: [RouterModule],
  providers: [],
})

export class DashboardRoutingModule {
}
