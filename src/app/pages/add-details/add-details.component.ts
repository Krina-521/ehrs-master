import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

interface Detail{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent {
  // selectedOption = 'Doctor';
  // details: Detail[] = [
  //   {value: 'department', viewValue: 'Department'},
  //   {value: 'doctor', viewValue: 'Doctor'},
  //   {value: 'patient', viewValue: 'Patient'},
  //   {value: 'nurse', viewValue: 'Nurse'},
  //   {value: 'pharmacist', viewValue: 'Pharmacist'},
  //   {value: 'laboratorist', viewValue: 'Laboratorist'},
  //   {value: 'accountant', viewValue: 'Accountant'},
  //   {value: 'receptionist', viewValue: 'Receptionist'},
  // ];

  // onSelection(value: string){
  //   console.log(value);
  //   this.selectedOption = value;
  // }
  addDetailsForm!: FormGroup;
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  title: string  = "Add Details";


  constructor(
    private _fb: FormBuilder,
    private common: CommonDataService
  ){}

  ngOnInit(){
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.codes = this.common.getCodes();

    this.addDetailsForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      qualification: ['', [Validators.required]],
      staffType: ['', [Validators.required]],
      hiredAt: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      department: ['', [Validators.required]],
      address: ['', [Validators.required]],
      extraDetails: ['', [Validators.required]],
    })
  }

  onReset(){}
  onSubmit(){
    console.log(this.addDetailsForm.value);
  }

}
