import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro';

const httpOtions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

const apiUri = "http://localhost:3000/livros";

@Injectable({
  providedIn: 'root'
})
export class LivroApiService {

  constructor(private http: HttpClient) { }

  getLivros():Observable<Livro[]>{
    return this.http.get<Livro[]>(apiUri);
  }

  inserir(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(apiUri, livro, httpOtions);
  }

  buscarPorIsbn(id: string): Observable<Livro>{
    const uri = `${apiUri}/localizar?id=${id}`;
    return this.http.get<Livro>(uri);
  }

  editar(id: string, livro: Livro): Observable<Livro>{
    const uri = `${apiUri}/${id}`;
    return this.http.put<Livro>(uri, livro, httpOtions);
  }

  deletar(id: string){
    const uri = `${apiUri}/${id}`;
    return this.http.delete(uri);
  }
}
