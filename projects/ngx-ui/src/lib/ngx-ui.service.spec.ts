import { TestBed, inject } from '@angular/core/testing';

import { NgxUiService } from './ngx-ui.service';

describe('NgxUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxUiService]
    });
  });

  it('should be created', inject([NgxUiService], (service: NgxUiService) => {
    expect(service).toBeTruthy();
  }));
});
