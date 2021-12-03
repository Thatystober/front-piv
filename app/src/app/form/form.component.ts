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
  id!: string;
  botaoAcao = 'Cadastrar';
  mensagem = "";

  constructor(private LivroApiService: LivroApiService,
    private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.mensagem = "";
      if(this.id) {
        this.botaoAcao = "Editar";
        this.LivroApiService.buscarPorIsbn(this.id).subscribe(res => {
          this.livro = res;
          console.log(this.livro);
        })
      }    
    }  
    
  salvar() {
    if(!this.id){
      this.LivroApiService.inserir(this.livro).subscribe(res => {
        this.mensagem = `${res.nome}` + " cadastrado à estante com sucesso!";
        this.livro = new Livro();
      })
    }else{
      this.LivroApiService.editar(this.id, this.livro).subscribe(res =>{
        this.mensagem = `${res.nome}` + " editado com sucesso!";
        this.livro = res;
      })
    }
  }

  cancelar(){
    this.router.navigate(['/estante'])
  }

}
