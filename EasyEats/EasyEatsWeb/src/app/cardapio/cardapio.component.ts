import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  constructor(private router: Router) {
    this.pratos = [];
  }
  pratos: any[];

  ngOnInit() {

    this.Pratos();

    let modal_excluir = document.getElementById("box_modal_cardapio-excluir");
    let modal_adicionar = document.getElementById("box_modal_cardapio-adicionar");

    modal_excluir?.classList.add("box_modal_cardapio-excluir")
    modal_adicionar?.classList.add("box_modal_cardapio-adicionar")
  }
  openModal(pratoID:string) {
    localStorage.setItem('pratoID', pratoID);

    let modal_abrir = document.getElementById("box_modal_cardapio-excluir");

    modal_abrir?.classList.remove("box_modal_cardapio-excluir");
    modal_abrir?.classList.add("box_modal_cardapio-excluir-1");
  }
  openModalAdicionar() {
    let modal_abrir_adicionar = document.getElementById("box_modal_cardapio-adicionar");

    modal_abrir_adicionar?.classList.remove("box_modal_cardapio-adicionar");
    modal_abrir_adicionar?.classList.add("box_modal_cardapio-adicionar-1");
  }

  Pratos() {
    let id_restaurante = localStorage.getItem("id")
    $.post(`https://kwr3pd-3000.csb.app/cardapio`, {id_restaurante: id_restaurante}, (res) => {
      console.log("Recebi alguma coisa");
      console.log(res);
      this.pratos = res;
    });
  }
}
