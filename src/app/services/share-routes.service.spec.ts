/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareRoutesService } from './share-routes.service';

describe('Service: ShareRoutes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareRoutesService]
    });
  });

  it('should ...', inject([ShareRoutesService], (service: ShareRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
