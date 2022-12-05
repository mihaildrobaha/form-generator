import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-myltiple-test-input',
  templateUrl: './myltiple-test-input.component.html',
  styleUrls: ['./myltiple-test-input.component.scss']
})
export class MyltipleTestInputComponent implements OnInit {

  @Input() public inputData!: any;
  @Input() public control!: any;

  formGroup: FormGroup = new FormGroup({})

  multiplyArray: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.addEducation(0)
    this.formGroup.valueChanges.subscribe(() => {
      this.control.setValue(this.formGroup.value)
    })
  }

  public addEducation(i: number) {
    this.formGroup.addControl(this.inputData.label + '_' + i, new FormControl())
    this.multiplyArray.push({...this.inputData})
   }

  public deleteEducation(i: number) {
    this.formGroup.removeControl(this.inputData.label + '_' + i)
    this.multiplyArray.splice(i, 1)
   }


}
