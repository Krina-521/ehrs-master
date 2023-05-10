import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records.component';

const records_routes: Routes = [{ path: '', component: RecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(records_routes)],
  exports: [RouterModule],
  providers: [],
})
export class RecordsRoutingModule {}
