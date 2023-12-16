import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDemoFormDetailsComponent } from './book-demo-form-details.component';

describe('BookDemoFormDetailsComponent', () => {
  let component: BookDemoFormDetailsComponent;
  let fixture: ComponentFixture<BookDemoFormDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDemoFormDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDemoFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
