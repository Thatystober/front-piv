import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  estante: Livro[] = [ 
    {_id: "1", isbn: 1, nome: "Livro1", preco: 20.00, autor: "Thaty", editora: "Ls"}
    ];

  constructor() { }

  addLivro(livro: Livro) {
    this.estante.push(livro);
  }

  getLivros() {
    return this.estante;    
  }  

  buscarPorIsbn(id:string){
    const livro = this.estante.find(livro => livro._id === id);
    return livro ?livro: new Livro();
  }

  editarLivro(id:string, livro: Livro){
    const index = this.getIsbn(id);
    if(index >= 0){
      this.estante[index] = livro;
    }
  }

  deletarLivro(id:string){
    const index = this.getIsbn(id);
    if(index >= 0){
      this.estante.splice(index, 1);
    }
  }

  private getIsbn(id:string){
    return this.estante.findIndex(livro => livro._id === id);
  }
}
