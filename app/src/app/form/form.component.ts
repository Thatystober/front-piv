import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  livro: Livro = new Livro();
  isbn!: number;
  botaoAcao = 'Cadastrar';
  mensagem = "";

  constructor(private LivroService: LivroService,
    private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.isbn = +this.route.snapshot.params['isbn'];
      this.mensagem = "";
      if(this.isbn) {
        this.botaoAcao = "Editar";
        this.livro = Object.assign({}, 
            this.LivroService.buscarPorIsbn(this.isbn));
      }    
    }  

  salvar() {
    if(!this.isbn){
      this.LivroService.addLivro(this.livro);
      this.mensagem = this.livro.nome + " cadastrado à estante com sucesso!";
      this.livro = new Livro();
    }else{
      this.LivroService.editarLivro(this.isbn, this.livro);
      this.mensagem = this.livro.nome + " editado com sucesso!";
    }
  }

  cancelar(){
    this.router.navigate(['/tabela'])
  }

}
