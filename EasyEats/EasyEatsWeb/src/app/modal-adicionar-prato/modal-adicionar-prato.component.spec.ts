import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarPratoComponent } from './modal-adicionar-prato.component';

describe('ModalAdicionarPratoComponent', () => {
  let component: ModalAdicionarPratoComponent;
  let fixture: ComponentFixture<ModalAdicionarPratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarPratoComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
