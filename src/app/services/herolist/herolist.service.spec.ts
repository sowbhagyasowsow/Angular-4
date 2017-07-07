import { TestBed, inject } from '@angular/core/testing';

import { HerolistService } from './herolist.service';

describe('HerolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerolistService]
    });
  });

  it('should be created', inject([HerolistService], (service: HerolistService) => {
    expect(service).toBeTruthy();
  }));
});
