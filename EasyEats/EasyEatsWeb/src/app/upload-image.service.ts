import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UploadImage {
  constructor(private router: Router) {}

  public key: any;
  public url : Array<any> = []

  public SubirImagem(imagem: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const envio: Array<any> = [];
      //armazena as informações do form
      firebase
        .database()
        .ref(`Prato`)
        .push({nomeDoPrato: imagem.nomeDoPrato})
        .then((resposta: any) => {
          // console.log(resposta)
          let nomeImagem = resposta.key;
          console.log('key: ', nomeImagem);
          this.key = resposta.key;
          //armazena a imagem no firabase com id dos detalhes da imagem
          firebase
            .storage()
            .ref()
            .child(`Prato/${nomeImagem}`)
            .put(imagem.imagem)
            .then((snapshot) => {
              console.log('concluida1');
              snapshot.ref.getDownloadURL().then((url) => {
                // URL da imagem obtida
                this.url[0] = url;
                console.log('url obtidade1', url);
                let response = {
                  url : url,
                  key : this.key
                }
                envio.push(response);
                resolve(envio);
              });
            })
            .catch((error) => {
              // Tratamento de erro
              console.error(error);
              reject(error);
            });
          //console.log(resposta.key)
          console.log(imagem);
          console.log('chegamos até o controle de dados');
        });
    });
  }
}
