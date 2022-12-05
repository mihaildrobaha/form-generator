import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  @Input() public inputData!: any;
  @Input() public control!: any;

  public dropDownListToggle: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public showDropDownList(): void {
    this.dropDownListToggle = !this.dropDownListToggle
  }

  public closeDropDownList(): void {
    this.dropDownListToggle = false
  }

  public setSelectet(i: number): void {
    for (let currentValue = 0; currentValue < this.inputData.values.length; currentValue++) {
      if (this.inputData.values[i] === this.inputData.values[currentValue]) {
        this.inputData.values[currentValue].isSelected = true
      } else {
        this.inputData.values[currentValue].isSelected = false
      }
    }
  }

  public selectValue(i: number): void {
    this.inputData.placeholder = this.inputData.values[i].value
    this.control.setValue(this.inputData.values[i].value)
    this.setSelectet(i)
  }

}
