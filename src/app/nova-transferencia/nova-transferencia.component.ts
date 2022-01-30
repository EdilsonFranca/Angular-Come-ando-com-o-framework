import { Router, Routes } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private services : TransferenciaService , private router : Router){}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir : Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.services.adicionar(valorEmitir).subscribe(
      (result) =>{
       this.limparCampos();
       this.router.navigateByUrl('extrato')
    },
    (error)=>  console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
