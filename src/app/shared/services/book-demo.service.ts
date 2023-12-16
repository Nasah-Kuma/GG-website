import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookDemoService {

  private shown = new BehaviorSubject(false);
  constructor() { }

  visibilityChange(): Observable<boolean> {
    return this.shown.asObservable();
  }

  toggleVisibility(visibility: boolean) {
    this.shown.next(visibility);
  }

}
