import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {
  constructor(private router: Router) { }

  AlterarPerfil(nome:string, endereco:string, descricao:string){

    let id = localStorage.getItem('id')

    console.log("Vou tentar alterar seu perfil");
    $.post(
      `https://kwr3pd-3000.csb.app/atualizarRestaurante`,
      {
        id: id,
        nome: nome,
        endereco: endereco,
        descricao: descricao
      },
      (res) => {
        console.log('Recebi uma resposta do servidor');
        console.log(res);
        this.BuscarRestaurante();
        this.router.navigate(['/menu-restaurante']);
      },
    );
  }

  BuscarRestaurante(){
    let id = localStorage.getItem('id')
    console.log("Estou buscando os novos dados do seu restaurante");
    $.post(
      `https://kwr3pd-3000.csb.app/restaurante-id`,
      {
        id: id,
      },
      (res) => {
        console.log('Recebi uma resposta do servidor');
        console.log(res);
        this.localStorage(res[0].ID, res[0].nome, res[0].endereco, res[0].link, res[0].descricao, res[0].cargo);
      },
    );
  }

  localStorage(id: string, nome: string, endereco: string, link: string, descricao: string, cargo: string) {
    console.log('Fui acionado');

    localStorage.setItem('id', id); //salvando o id no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('link', link);
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('cargo', cargo);
  }
}
