import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerRoutingModule } from './scheduler.route';
import { SchedulerComponent } from './scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatNativeDateModule} from '@angular/material/core';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    SchedulerComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatNativeDateModule,
    NgbModalModule,
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class SchedulerModule { }
