import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      /**
       * When someone wants access to valueAccesor, use my custon class an create new instances for each of them (multi: true)
       */
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() formControl: FormControl;

  public value: boolean;
  public isDisabled = false;

  constructor() {}

  private onChange: (value: boolean) => void;
  private onTouched: () => void;

  writeValue(obj: boolean): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {}
}
