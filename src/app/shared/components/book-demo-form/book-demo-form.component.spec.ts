import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDemoFormComponent } from './book-demo-form.component';

describe('BookDemoFormComponent', () => {
  let component: BookDemoFormComponent;
  let fixture: ComponentFixture<BookDemoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDemoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
