import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRecordsComponent } from './birth-records.component';

describe('BirthRecordsComponent', () => {
  let component: BirthRecordsComponent;
  let fixture: ComponentFixture<BirthRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
