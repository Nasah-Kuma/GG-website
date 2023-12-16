import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNUpdatesComponent } from './news-n-updates.component';

describe('NewsNUpdatesComponent', () => {
  let component: NewsNUpdatesComponent;
  let fixture: ComponentFixture<NewsNUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsNUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsNUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
