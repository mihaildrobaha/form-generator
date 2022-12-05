import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  @Input() public inputData!: any;
  @Input() public withoutLabel!: boolean;
  @Input() public withoutDescription!: boolean;
  @Input() public index!: number;
  @Input() public control!: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
