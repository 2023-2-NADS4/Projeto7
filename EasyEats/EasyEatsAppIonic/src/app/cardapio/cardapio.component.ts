import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  NavegarParaCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  NavegarEntradas(){
    this.router.navigate(['/entradas']);
  }

  NavegarPrincipais(){
    this.router.navigate(['/principais']);
  }

  NavegarSobremesas(){
    this.router.navigate(['/sobremesas']);
  }

  NavegarBebidas(){
    this.router.navigate(['/bebidas']);
  }
}
