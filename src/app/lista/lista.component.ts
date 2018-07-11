import { Lista } from './../lista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: Lista = new Lista();
  produto: string = '';

  constructor() { }

  ngOnInit() {
  }

  addProdutoNaLista(produto: string){
    this.lista.produtos.push(produto);
  }


}
