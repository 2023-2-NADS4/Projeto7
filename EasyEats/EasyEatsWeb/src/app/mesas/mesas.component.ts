import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  constructor(private router: Router) {
    this.mesas = [];
  }
  mesas: any[];

  ngOnInit() {

    this.Mesas();

    let modal_excluir = document.getElementById("box_modal_mesa-excluir");
    let modal_adicionar = document.getElementById("box_modal_mesa-adicionar");

    modal_excluir?.classList.add("box_modal_mesa-excluir")
    modal_adicionar?.classList.add("box_modal_mesa-adicionar")
  }
  openModalExcluir(mesaID:string) {
    localStorage.setItem('mesaID', mesaID);
    let modal_abrir = document.getElementById("box_modal_mesa-excluir");
    modal_abrir?.classList.remove("box_modal_mesa-excluir");
    modal_abrir?.classList.add("box_modal_mesa-excluir-1");
  }
  openModalAdicionar() {
    let modal_abrir_adicionar = document.getElementById("box_modal_mesa-adicionar");
    modal_abrir_adicionar?.classList.remove("box_modal_mesa-adicionar");
    modal_abrir_adicionar?.classList.add("box_modal_mesa-adicionar-1");
  }

  Mesas() {
    let id_restaurante = localStorage.getItem("id")
    console.log('Iniciando a busca das mesas');
    console.log("O ID selecionado é: " + id_restaurante);

    $.post(`https://kwr3pd-3000.csb.app/mesas`, {id_restaurante: id_restaurante}, (res) => {
      console.log("Recebi alguma coisa");
      console.log(res);
      this.mesas = res;
    });
}
}
