import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsRoutingModule } from './show-details.route';
import { ShowDetailsComponent } from './show-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatNativeDateModule} from '@angular/material/core';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [ShowDetailsComponent, DepartmentDetailsComponent, StaffDetailsComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    ShowDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatNativeDateModule
  ]
})
export class ShowDetailsModule { }
