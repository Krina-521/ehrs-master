import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  genders!: string[];
  bloodGroups!: string[];
  codes!: string[];
  departments!: string[];
  doctorForm!: FormGroup;
  filteredBloodGroups!: Observable<string[]>;

  @Input('title') title!: string;
  constructor(private common: CommonDataService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.doctorForm = this._fb.group({
      doctorFirstName: ['', [Validators.required, Validators.minLength(3)]],
      doctorLastName: ['', [Validators.required, Validators.minLength(3)]],
      doctorEmail: ['', [Validators.required, Validators.email]],
      doctorDepartment: ['', [Validators.required]],
      doctorGender: ['', [Validators.required]],
      doctorAge: ['', [Validators.required, Validators.max(150)]],
      doctorBloodGroup: ['', [Validators.required]],
      doctorCountryCode: ['', [Validators.required]],
      doctorPhone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      doctorAddress: ['', [Validators.required]],
    });

    // this.filteredBloodGroups = this.doctorForm
    //   .get('doctorBloodGroup')
    //   .valueChanges.pipe(
    //     startWith(''),
    //     map((value: string) => this._filter(value || ''))
    //   );
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.bloodGroups.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }

  get doctorFirstName() {
    return this.doctorForm.get('doctorFirstName');
  }
  get doctorLastName() {
    return this.doctorForm.get('doctorLastName');
  }
  get doctorEmail() {
    return this.doctorForm.get('doctorEmail');
  }
  get doctorDepartment() {
    return this.doctorForm.get('doctorDepartment');
  }
  get doctorGender() {
    return this.doctorForm.get('doctorGender');
  }
  get doctorAge() {
    return this.doctorForm.get('doctorAge');
  }
  get doctorBloodGroup() {
    return this.doctorForm.get('doctorBloodGroup');
  }
  get doctorAddress() {
    return this.doctorForm.get('doctorAddress');
  }
  get doctorCountryCode() {
    return this.doctorForm.get('doctorCountryCode');
  }
  get doctorPhone() {
    return this.doctorForm.get('doctorPhone');
  }
  onReset() {
    this.doctorForm.reset();
  }
  onSubmit() {
    console.log(this.doctorForm.value);
    this.doctorForm.reset();
  }
}
