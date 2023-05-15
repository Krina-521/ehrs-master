import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent {
  addDetailsForm!: FormGroup;
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  staffTypes!: string[];
  @Input('title') title!: string;
  // title: string = 'Add Details';

  constructor(private _fb: FormBuilder, private common: CommonDataService) {}

  ngOnInit() {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.codes = this.common.getCodes();
    this.staffTypes = this.common.getStaffType();

    this.addDetailsForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ],
      ],
      qualification: ['', [Validators.required]],
      staffType: ['', [Validators.required]],
      hiredAt: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      department: ['', [Validators.required]],
      address: ['', [Validators.required]],
      extraDetails: ['', [Validators.required]],
    });
  }

  onReset() {}
  onSubmit() {
    console.log(this.addDetailsForm.value);
  }
}
