import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {

  @Input() public inputData!: any;
  @Input() public control!: any;

  values: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  public checkBoxClicked(i:number):void {
    if( this.inputData.choices[i].value === "Выделить всё") {
      if (this.inputData.choices[i].isChecked === false) {
        this.values = []
        this.inputData.choices.forEach((choice:any) => {
          choice.isChecked = true
          this.values.push(choice.value)
          this.control.setValue(this.values)
        });
      } else {
        this.inputData.choices.forEach((choice:any) => {
          choice.isChecked = false
          this.values = []
          this.control.setValue(this.values)
        });
      }
      
    } else {
      this.inputData.choices[i].isChecked = !this.inputData.choices[i].isChecked
    }

    if (this.inputData.choices[i].isChecked && this.inputData.choices[i].value !== "Выделить всё") {
      this.values.push(this.inputData.choices[i].value)
      this.control.setValue(this.values)
    } 
    if (this.inputData.choices[i].isChecked === false) {
      this.values = this.values.filter((value: string) => value !== this.inputData.choices[i].value)
      this.control.setValue(this.values)
    }
  }

}
