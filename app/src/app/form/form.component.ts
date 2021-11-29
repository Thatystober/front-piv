import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';

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

  constructor(private LivroApiService: LivroApiService,
    private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.isbn = this.route.snapshot.params['isbn'];
      this.mensagem = "";
      if(this.isbn) {
        this.botaoAcao = "Editar";
        this.LivroApiService.buscarPorId(this.isbn).subscribe(res => {
          this.livro = res;
        })
      }    
    }  
    
  salvar() {
    if(!this.isbn){
      this.LivroApiService.inserir(this.livro).subscribe(res => {
        this.mensagem = `${res.nome}` + " cadastrado à estante com sucesso!";
        this.livro = new Livro();
      })
    }else{
      this.LivroApiService.editar(this.isbn, this.livro).subscribe(res =>{
        this.mensagem = `${res.nome}` + " editado com sucesso!";
        this.livro = res;
      })
    }
  }

  cancelar(){
    this.router.navigate(['/estante'])
  }

}
