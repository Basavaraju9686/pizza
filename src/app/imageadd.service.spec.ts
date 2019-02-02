import { TestBed, inject } from '@angular/core/testing';

import { ImageaddService } from './imageadd.service';

describe('ImageaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageaddService]
    });
  });

  it('should be created', inject([ImageaddService], (service: ImageaddService) => {
    expect(service).toBeTruthy();
  }));
});
