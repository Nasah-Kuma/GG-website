import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDemoService} from "../../services/book-demo.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-demo-form',
  templateUrl: './book-demo-form.component.html',
  styleUrls: ['./book-demo-form.component.scss']
})
export class BookDemoFormComponent implements OnInit, OnDestroy {
  shown = false;
  subscriptions: Subscription[] = [];
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
  constructor(private _demo: BookDemoService) {}

  ngOnInit() {
    this._demo.visibilityChange().subscribe(visibility => this.shown = visibility)
  }

  hide() {
    this._demo.toggleVisibility(false);
  }

  book() {
    //after submitting

    this.hide();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
}
