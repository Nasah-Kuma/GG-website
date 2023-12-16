import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TextInputComponent,
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor, Validator{
  @Input() label='';
  @Input() value = '';

  readonly formControl: UntypedFormControl;
  group: UntypedFormGroup;

  constructor() {
    this.formControl = new UntypedFormControl(this.value);
    this.group = new UntypedFormGroup({
      value: this.formControl
    })
  }
  ngOnInit(): void {
    this.formControl.patchValue(this.value);
    this.formControl.valueChanges.subscribe((value) => {
      this._onTouched()
      this._onChange(value);
    })
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  writeValue(obj: any): void {
  }

  private _onTouched = () => undefined;
  private _onChange = (value: any) => undefined;

}
