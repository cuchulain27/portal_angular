import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-competenciaslaborales',
  templateUrl: './competenciaslaborales.component.html',
  styleUrls: ['./competenciaslaborales.component.css']
})
export class CompetenciaslaboralesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido: any){
    this.modal.open(contenido,{centered: true});
  }

}
