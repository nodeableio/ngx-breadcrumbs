import { TestBed, inject } from '@angular/core/testing';

import { NioBreadcrumbsService } from './breadcrumbs.service';

describe('NioBreadcrumbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NioBreadcrumbsService]
    });
  });

  it(
    'should be created',
    inject([NioBreadcrumbsService], (service: NioBreadcrumbsService) => {
      expect(service).toBeTruthy();
    })
  );
});
