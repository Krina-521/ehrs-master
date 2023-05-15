import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';

const rooms_routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    // children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },{ path: 'dashboard',component:DashboardComponent}]
    // , children: [
    //   { path: '', component: DashboardComponent},
    //   // { path: 'dashboard', component: DashboardComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(rooms_routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoomsRoutingModule {}
