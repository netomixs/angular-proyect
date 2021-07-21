import { TestBed } from '@angular/core/testing';

import { FormStudentsService } from './form-students.service';

describe('FormStudentsService', () => {
  let service: FormStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
