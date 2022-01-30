import { Transferencia } from './../models/transferencia.model';
import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private services : TransferenciaService){}

  ngOnInit() {
    this.services.todas().subscribe((transferencias : Transferencia[])=>{
    this.transferencias = transferencias;
    });
  }
}
