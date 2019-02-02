import { TestBed, inject } from '@angular/core/testing';

import { ListproductsService } from './listproducts.service';

describe('ListproductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListproductsService]
    });
  });

  it('should be created', inject([ListproductsService], (service: ListproductsService) => {
    expect(service).toBeTruthy();
  }));
});
