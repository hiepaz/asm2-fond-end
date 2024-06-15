import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import {canTruongGuard} from './can-truong.guard';

describe('canTruongGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canTruongGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
