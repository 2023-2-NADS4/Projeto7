import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  Login(usuario: string, senha: string) {
    console.log('Função Login acionada');
    $.post(
      `https://kwr3pd-3000.csb.app/login-mobile`,
      {
        usuario: usuario,
        senha: senha,
      },
      (res) => {
        console.log('Colhi uma resposta:');
        console.log(res);
        if (res === 'Senha incorreta') {
          alert('Senha incorreta');
          window.location.reload();
        } else if (res === 'Usuário não encontrado') {
          alert('Usuário não encontrado');
          window.location.reload();
        } else {
          this.localStorage(
            res[0].id,
            res[0].usuario,
            res[0].nome,
            res[0].senha,
            res[0].descricao,
            res[0].id_restaurante
          );

          this.router.navigate(['/cardapio']);
        }
      }
    );
  }

  localStorage(
    id: string,
    usuario: string,
    nome: string,
    senha: string,
    descricao: string,
    id_restaurante: string
  ) {
    console.log('LocalStorage Acionado!');
    localStorage.setItem('id', id); //salvando o id no localStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('id_restaurante', id_restaurante);
    console.log('O id da mesa é: ' + localStorage.getItem('id'));
  }
}
