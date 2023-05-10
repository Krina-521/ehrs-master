import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: [
        // Add your events here
      ]
    };
  }
}
