import { TestBed } from '@angular/core/testing';
import { CcServicesModule } from './cc-services.module';

describe('CCServicesModule', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CcServicesModule]
    });
    await TestBed.compileComponents();
  });

  it('should create', () => {
    expect(CcServicesModule).toBeDefined();
  });
});
