import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirPratoComponent } from './modal-excluir-prato.component';

describe('ModalExcluirPratoComponent', () => {
  let component: ModalExcluirPratoComponent;
  let fixture: ComponentFixture<ModalExcluirPratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirPratoComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
