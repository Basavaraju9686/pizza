import { TestBed, inject } from '@angular/core/testing';

import { ViewproductsService } from './viewproducts.service';

describe('ViewproductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewproductsService]
    });
  });

  it('should be created', inject([ViewproductsService], (service: ViewproductsService) => {
    expect(service).toBeTruthy();
  }));
});
