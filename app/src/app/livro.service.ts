import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  estante: Livro[] = [ 
    {isbn: 1, nome: "Livro1", preco: 20.00, autor: "Thaty", editora: "Ls"}
    ];

  constructor() { }

  addLivro(livro: Livro) {
    this.estante.push(livro);
  }

  getLivros() {
    return this.estante;    
  }  

  buscarPorIsbn(isbn:number){
    const livro = this.estante.find(livro => livro.isbn === isbn);
    return livro ?livro: new Livro();
  }

  editarLivro(isbn:number, livro: Livro){
    const index = this.getIsbn(isbn);
    if(index >= 0){
      this.estante[index] = livro;
    }
  }

  deletarLivro(isbn:number){
    const index = this.getIsbn(isbn);
    if(index >= 0){
      this.estante.splice(index, 1);
    }
  }

  private getIsbn(isbn:number){
    return this.estante.findIndex(livro => livro.isbn === isbn);
  }
}
