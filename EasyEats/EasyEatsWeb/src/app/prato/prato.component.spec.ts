import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoComponent } from './prato.component';

describe('PratoComponent', () => {
  let component: PratoComponent;
  let fixture: ComponentFixture<PratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PratoComponent]
    });
    fixture = TestBed.createComponent(PratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
