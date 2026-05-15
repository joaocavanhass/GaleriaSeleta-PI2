import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  quantidade: number;
}

@Component({
  selector: 'app-carrinho',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  cupom = '';
  desconto = 0;

  itens: CartItem[] = [
    {
      id: 1,
      nome: 'Moletom Vintage',
      descricao: 'Peça exclusiva streetwear',
      preco: 289.90,
      imagem: 'https://images.unsplash.com/photo-1499971442178-8c10fdf5f6ac?auto=format&fit=crop&w=600&q=80',
      quantidade: 1
    },
    {
      id: 2,
      nome: 'Jaqueta Urban',
      descricao: 'Coleção limitada',
      preco: 459.90,
      imagem: 'https://images.unsplash.com/photo-1727524366429-27de8607d5f6?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantidade: 1
    }
  ];

  aumentarQtd(item: CartItem) {
    item.quantidade++;
  }

  diminuirQtd(item: CartItem) {
    if (item.quantidade > 1) {
      item.quantidade--;
    }
  }

  removerItem(id: number) {
    this.itens = this.itens.filter(item => item.id !== id);
  }

  aplicarCupom() {
    if (this.cupom.trim().toUpperCase() === 'GALERIA10') {
      this.desconto = this.subtotal * 0.1;
    } else {
      this.desconto = 0;
    }
  }

  get subtotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }

  get total(): number {
    return this.subtotal - this.desconto;
  }

}