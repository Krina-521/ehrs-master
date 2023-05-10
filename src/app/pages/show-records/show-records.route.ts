import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecordsComponent } from './show-records.component';

const addDetails_routes: Routes = [
  {
    path: '',
    component: ShowRecordsComponent,
    // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
    // , children: [
    //   { path: '', component: DashboardComponent},
    //   // { path: 'dashboard', component: DashboardComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(addDetails_routes)],
  exports: [RouterModule],
  providers: [],
})
export class ShowRecordsRoutingModule {}
