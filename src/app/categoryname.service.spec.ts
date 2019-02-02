import { TestBed, inject } from '@angular/core/testing';

import { CategorynameService } from './categoryname.service';

describe('CategorynameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorynameService]
    });
  });

  it('should be created', inject([CategorynameService], (service: CategorynameService) => {
    expect(service).toBeTruthy();
  }));
});
