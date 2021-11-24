import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listaLivros: Livro[], valor?: string): Livro[] {
    const nome = valor? valor :"";
    return listaLivros.filter ((livro) =>
       livro.nome.toLowerCase().includes(nome.toLowerCase()));
  }

}
