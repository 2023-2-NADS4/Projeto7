import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarRestauranteComponent } from './modal-adicionar-restaurante.component';

describe('ModalAdicionarRestauranteComponent', () => {
  let component: ModalAdicionarRestauranteComponent;
  let fixture: ComponentFixture<ModalAdicionarRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarRestauranteComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
