import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor (private formData: FormDataService) { }
  
  public inputsArray!: any[]

  public myFormGroup = new FormGroup({})

  ngOnInit(): void {
    this.formData.getInputs().
      subscribe(data => {
        this.inputsArray = data
      });

      this.myFormGroup.valueChanges.subscribe(formValue => {
      })

      this.addFormControls()
      console.log(this.myFormGroup);
  }

  public addFormControls(): void {
    this.inputsArray.forEach(input => {
      if (input.isRequired) {
        this.myFormGroup.addControl(input.label, new FormControl(null, Validators.required));
      } else this.myFormGroup.addControl(input.label, new FormControl(null));
    })
  }

  public getFormControl(label: string): any {
      return this.myFormGroup.get(label)
  }

  public onSubmit(): void {
    console.log(this.myFormGroup.value);
  }

}
