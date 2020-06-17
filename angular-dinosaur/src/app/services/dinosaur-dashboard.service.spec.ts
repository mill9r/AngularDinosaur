import { TestBed } from '@angular/core/testing';

import { DinosaurDashboardService } from './dinosaur-dashboard.service';

describe('DinosaurDashboardService', () => {
  let service: DinosaurDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinosaurDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
