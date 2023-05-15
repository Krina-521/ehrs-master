import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records.route';
import { HealthRecordsComponent } from './health-records/health-records.component';
import { OperationRecordsComponent } from './operation-records/operation-records.component';
import { BirthRecordsComponent } from './birth-records/birth-records.component';
import { DeathRecordsComponent } from './death-records/death-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { BillingRecordsComponent } from './billing-records/billing-records.component';

@NgModule({
  declarations: [
    RecordsComponent,
    HealthRecordsComponent,
    OperationRecordsComponent,
    BirthRecordsComponent,
    DeathRecordsComponent,
    MedicalRecordsComponent,
    BillingRecordsComponent,
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class RecordsModule {}
