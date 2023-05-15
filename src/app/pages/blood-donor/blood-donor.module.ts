import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodDonorRoutingModule } from './blood-donor.routes';
import { BloodDonorComponent } from './blood-donor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [BloodDonorComponent],
  imports: [
    CommonModule,
    BloodDonorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class BloodDonorModule {}
