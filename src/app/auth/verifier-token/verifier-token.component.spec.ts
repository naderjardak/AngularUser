import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierTokenComponent } from './verifier-token.component';

describe('VerifierTokenComponent', () => {
  let component: VerifierTokenComponent;
  let fixture: ComponentFixture<VerifierTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifierTokenComponent]
    });
    fixture = TestBed.createComponent(VerifierTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
