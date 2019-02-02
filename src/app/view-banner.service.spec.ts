import { TestBed, inject } from '@angular/core/testing';

import { ViewBannerService } from './view-banner.service';

describe('ViewBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewBannerService]
    });
  });

  it('should be created', inject([ViewBannerService], (service: ViewBannerService) => {
    expect(service).toBeTruthy();
  }));
});
