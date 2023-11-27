import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

  constructor(
    private http: HttpClient
  ) { }

  get ListAllPokemons():Observable<any>{
    // tap executa requisição e armazena o resultado para executar segunda requisição via tap
    return this.http.get<any>(this.url).pipe(
      tap( res => res ),
      //busca o status array dentro de pokemon chamando o serviço q busca 1 especifico
      tap( res => { 
        //passa o os dados do segundo array para results
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }
}
