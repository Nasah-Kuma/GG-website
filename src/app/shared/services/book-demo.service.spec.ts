import { TestBed } from '@angular/core/testing';

import { BookDemoService } from './book-demo.service';

describe('BookDemoService', () => {
  let service: BookDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
