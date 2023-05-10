import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsRoutingModule } from './add-details.route';
import { AddDetailsComponent } from './add-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientsComponent } from './patients/patients.component';
import { NurseComponent } from './nurse/nurse.component';
import { AccountantComponent } from 'src/app/pages/add-details/accountant/accountant.component';
import { DepartmentComponent } from './department/department.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LaboratoristComponent } from './laboratorist/laboratorist.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AddDetailsComponent,
    DoctorComponent,
    PatientsComponent,
    NurseComponent,
    AccountantComponent,
    DepartmentComponent,
    PharmacistComponent,
    LaboratoristComponent,
    ReceptionistComponent,
  ],
  imports: [
    CommonModule,
    AddDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
})
export class AddDetailsModule {}
