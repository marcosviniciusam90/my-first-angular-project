import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
      return this.http.get('http://localhost:3000/cidades')
        .toPromise();
  }

  adicionar(cidade: any): Promise<any> {
      return this.http.post('http://localhost:3000/cidades', cidade)
        .toPromise();
  }

  excluir(id: number): Promise<any> {
      return this.http.delete(`http://localhost:3000/cidades/${id}`)
        .toPromise();
  }

}
