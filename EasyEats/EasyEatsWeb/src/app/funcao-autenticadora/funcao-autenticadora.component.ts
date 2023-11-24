import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcao-autenticadora',
  templateUrl: './funcao-autenticadora.component.html',
  styleUrls: ['./funcao-autenticadora.component.css']
})
export class FuncaoAutenticadoraComponent {

  ngOnInit(){
    let id = localStorage.getItem('id')
    let idInt = 0;

    console.log(id);

    if (id === null) {
      window.location.href = "/";
      alert('Você não está logado!');
      localStorage.clear();
    }else{
      idInt = parseInt(id)
      if (idInt <= 0 || idInt >= 999999){
        window.location.href = "/";
        alert('Você não está logado!');
        localStorage.clear();
      }
    }
  }
}
