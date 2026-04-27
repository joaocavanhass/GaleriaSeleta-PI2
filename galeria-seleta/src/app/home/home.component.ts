import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  slideAtual = 0;

  slides = [
    { titulo: 'Encontre Peças', italico: 'únicas', subtitulo: 'Descubra tesouro vintage e peças exclusivas' },
    { titulo: 'Curadoria com',  italico: 'alma',   subtitulo: 'Cada peça carrega uma história única' },
    { titulo: 'Estilo',         italico: 'atemporal', subtitulo: 'Moda que transcende tendências' },
  ];

  produtos = [
    { id: 1, nome: 'Produto 1', descricao: 'Desc. Vintage' },
    { id: 2, nome: 'Produto 2', descricao: 'Desc. Vintage' },
    { id: 3, nome: 'Produto 3', descricao: 'Desc. Vintage' },
    { id: 4, nome: 'Produto 4', descricao: 'Desc. Vintage' },
  ];

  categorias = ['Roupas', 'Acessórios', 'Decoração', 'Calçados'];

  dropdownAberto = false;

  next() {
    this.slideAtual = (this.slideAtual + 1) % this.slides.length;
  }

  prev() {
    this.slideAtual = (this.slideAtual - 1 + this.slides.length) % this.slides.length;
  }
}