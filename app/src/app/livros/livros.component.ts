import { Component, Input, OnInit, SimpleChanges  } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  @Input('nome') nomeComponente = 'Estante de Livros';
  livros: Livro[] = [];
  livroPesquisado = "";

  constructor(private LivroService: LivroService) {
    this.livros = this.LivroService.getLivros();
  }

  // ngOnChanges(): void {
  //   this.livros = this.LivroService.getLivros();
  // }

  ngOnInit(): void {
  }

  deletar(isbn: number): void {
    this.LivroService.deletarLivro(isbn);
  }

}
