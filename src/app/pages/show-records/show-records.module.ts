import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRecordsRoutingModule } from './show-records.route';
import { ShowRecordsComponent } from './show-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BirthRecordsComponent } from './birth-records/birth-records.component';
import { DeathRecordsComponent } from './death-records/death-records.component';
import { OperationRecordsComponent } from './operation-records/operation-records.component';
import { HealthRecordsComponent } from './health-records/health-records.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { BillingRecordsComponent } from './billing-records/billing-records.component';

@NgModule({
  declarations: [ShowRecordsComponent, BirthRecordsComponent, DeathRecordsComponent, OperationRecordsComponent, HealthRecordsComponent, MedicalRecordsComponent, BillingRecordsComponent],
  imports: [
    CommonModule,
    ShowRecordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class ShowRecordsModule {}
