import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit{
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  value: any;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouch();
  }
}
