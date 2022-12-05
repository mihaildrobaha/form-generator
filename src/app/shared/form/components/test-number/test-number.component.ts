import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {

  @Input() public inputData!: any;
  @Input() public formAge!: any;
  @Input() public control!: any;
  
  constructor() { }

  ngOnInit(): void {
    this.control.setValue(1)
  }

  public increaseValue(): void {
    this.control.setValue(this.control.value + 1)
  }

  public decreaseValue(): void {
    if (this.control.value === 0) {
      alert(`Ваш ${this.inputData.label.toLowerCase()} не может быть меньше нуля`)
      return
    }
    this.control.setValue(this.control.value - 1)
  }

}
