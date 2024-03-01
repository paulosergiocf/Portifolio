import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css'],
})
export class ProjetoCardComponent implements OnInit {

  @Input()
  imagem: string = '';
  @Input()
  titulo: string = '';
  @Input()
  descricao: string = '';

  constructor() {}

  ngOnInit(): void {}
}
