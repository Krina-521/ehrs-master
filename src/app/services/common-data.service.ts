import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  constructor() {}

  departments: string[] = ['Radiological', 'Ortho', 'Neurological'];
  genders: string[] = ['Female', 'Male', 'Other'];
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  relationShip: string[] = ['Single', 'Married'];
  codes: string[] = ['India - +91', 'USA - +1', 'Australia - +61'];
  status: string[] = ['Alive', 'Dead'];
  staffType: string[] = [
    'Doctor',
    'Nurse',
    'Receptionist',
    'Pharmacist',
    'Laboratorists',
    'Accountants',
  ];
  getDepartment() {
    return this.departments;
  }
  getGenders() {
    return this.genders;
  }
  getBloodGroups() {
    return this.bloodGroups;
  }
  getRelationshipStatus() {
    return this.relationShip;
  }
  getCodes() {
    return this.codes;
  }
  getStatus() {
    return this.status;
  }
  getStaffType() {
    return this.staffType;
  }
}
