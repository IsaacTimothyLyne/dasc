import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertFormComponent } from './cert-form.component';

describe('CertFormComponent', () => {
  let component: CertFormComponent;
  let fixture: ComponentFixture<CertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
