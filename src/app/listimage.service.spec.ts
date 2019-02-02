import { TestBed, inject } from '@angular/core/testing';

import { ListimageService } from './listimage.service';

describe('ListimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListimageService]
    });
  });

  it('should be created', inject([ListimageService], (service: ListimageService) => {
    expect(service).toBeTruthy();
  }));
});
