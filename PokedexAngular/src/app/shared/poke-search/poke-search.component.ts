import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  // evento emiter que vem da tela de listagem na chamada do search
  @Output() public realizaBusca: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // função que realiza a busca apenas chamando o emiter que vem da tela de listagem 
  //sem ela nao funcionaa busca
  public search(value: string){
    this.realizaBusca.emit(value);
  }
}
