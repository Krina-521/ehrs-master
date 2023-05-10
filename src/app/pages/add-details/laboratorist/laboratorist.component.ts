import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-laboratorist',
  templateUrl: './laboratorist.component.html',
  styleUrls: ['./laboratorist.component.css']
})
export class LaboratoristComponent {
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  laboratoristForm!: FormGroup;

  @Input('title') title!: string;

  constructor(
    private _fb: FormBuilder,
    private common: CommonDataService
  ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.laboratoristForm = this._fb.group({
      laboratoristFirstName: ['', [Validators.required, Validators.minLength(3)]],
      laboratoristLastName: ['', [Validators.required, Validators.minLength(3)]],
      laboratoristEmail: ['', [Validators.required, Validators.email]],
      laboratoristGender: ['', [Validators.required]],
      laboratoristAge: ['', [Validators.required, Validators.max(150)]],
      laboratoristBloodGroup: ['', [Validators.required]],
      laboratoristAddress: ['', [Validators.required]],
      laboratoristCountryCode: ['', [Validators.required]],
      laboratoristPhoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      laboratoristDepartment: ['', [Validators.required]],
    })
  }
  get laboratoristFirstName(){
    return this.laboratoristForm.get('laboratoristName');
  }
  get laboratoristLastName(){
    return this.laboratoristForm.get('laboratoristName');
  }
  get laboratoristEmail(){
    return this.laboratoristForm.get('laboratoristEmail');
  }
  get laboratoristDepartment(){
    return this.laboratoristForm.get('laboratoristDepartment');
  }
  get laboratoristAddress(){
    return this.laboratoristForm.get('laboratoristAddress');
  }
  get laboratoristCountryCode(){
    return this.laboratoristForm.get('laboratoristCountryCode');
  }
  get laboratoristPhoneNumber(){
    return this.laboratoristForm.get('laboratoristPhoneNumber');
  }
  onReset(){
    this.laboratoristForm.reset();
  }
  onSubmit(){
    console.log(this.laboratoristForm.value);
    this.laboratoristForm.reset();
  }
}
