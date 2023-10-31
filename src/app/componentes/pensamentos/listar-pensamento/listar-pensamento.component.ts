import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  ListarPensamentos : Pensamento[] =[
    // {
    //   id: 2,
    //   conteudo : 'Comunicação',
    //   autoria: 'Menino Ney',
    //   modelo:  'modelo3'
    // },
    // {
    //   id: 3,
    //   conteudo : 'I love Angular',
    //   autoria: 'Menino Ney',
    //   modelo:  'modelo1'
    // },
    // {
    //   id: 4,
    //   conteudo : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //   autoria: 'Menino Ney',
    //   modelo:  'modelo2'
    // }
  ];

  constructor(private servece: PensamentoService) { }

  ngOnInit(): void {
    this.servece.listar().subscribe((ListarPensamentos)=> {
      this.ListarPensamentos = ListarPensamentos
    })
  }

}
