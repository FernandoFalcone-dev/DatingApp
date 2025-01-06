import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';

  constructor(@Self() public ngControl: NgControl){
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl
  }

}
