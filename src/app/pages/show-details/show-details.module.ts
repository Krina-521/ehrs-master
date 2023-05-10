import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsRoutingModule } from './show-details.route';
import { ShowDetailsComponent } from './show-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [ShowDetailsComponent],
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
