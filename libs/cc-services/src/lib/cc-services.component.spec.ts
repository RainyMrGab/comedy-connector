import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcServicesComponent } from './cc-services.component';

describe('CcServicesComponent', () => {
  let component: CcServicesComponent;
  let fixture: ComponentFixture<CcServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
