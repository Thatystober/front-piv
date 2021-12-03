import { Component, Input, OnInit, SimpleChanges  } from '@angular/core';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';
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

  constructor(private LivroApiService: LivroApiService) {
      this.listar();
  }

  ngOnInit(): void {
  }

  listar() {
    this.LivroApiService.getLivros().subscribe(
      data => {
        this.livros = data;
        console.log(this.livros);
      }
    )
  }

  deletar(id: string): void {
    this.LivroApiService.deletar(id).subscribe(res =>{
      this.listar();
      console.log(res);
    });
  }

}
