import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsComponent } from './show-details.component';

const addDetails_routes: Routes = [
  {path: '', component: ShowDetailsComponent,
  // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
  // , children: [
  //   { path: '', component: DashboardComponent},
  //   // { path: 'dashboard', component: DashboardComponent}
  // ]
}
]

@NgModule({
  imports: [RouterModule.forChild(addDetails_routes)],
  exports: [RouterModule],
  providers: [],
})

export class ShowDetailsRoutingModule {
}
