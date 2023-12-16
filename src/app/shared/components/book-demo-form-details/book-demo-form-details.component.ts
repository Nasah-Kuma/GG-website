import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-demo-form-details',
  templateUrl: './book-demo-form-details.component.html',
  styleUrls: ['./book-demo-form-details.component.scss']
})
export class BookDemoFormDetailsComponent {
  @Input()
  title = false;

  @Output()
  close: EventEmitter<boolean> = new EventEmitter();
  
  hide() {
    this.close.emit(true);
  }

  newBookingForm = new FormGroup(
    {
      fullName: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      email: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      country: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      phone: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      company: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      sector: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
      comment: new FormControl('', {nonNullable: false, validators: [Validators.required]}),
    }
  )

  book() {
    console.log(this.newBookingForm.valid, this.newBookingForm.value);
    //after submitting
    this.hide();
  }
}
