import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { describe, beforeEach, it } from 'node:test';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Criação
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Carrossel
  it('deve iniciar no slide 0', () => {
    expect(component.slideAtual).toBe(0);
  });

  it('next() deve avançar o slide', () => {
    component.next();
    expect(component.slideAtual).toBe(1);
  });

  it('prev() no slide 0 deve ir para o último', () => {
    component.prev();
    expect(component.slideAtual).toBe(component.slides.length - 1);
  });

  it('next() no último slide deve voltar para 0', () => {
    component.slideAtual = component.slides.length - 1;
    component.next();
    expect(component.slideAtual).toBe(0);
  });

  // Dados
  it('deve ter 3 slides', () => {
    expect(component.slides.length).toBe(3);
  });

  it('deve ter 4 produtos', () => {
    expect(component.produtos.length).toBe(4);
  });

  it('deve ter 4 categorias', () => {
    expect(component.categorias.length).toBe(4);
  });

  // Dropdown
  it('dropdown deve iniciar fechado', () => {
    expect(component.dropdownAberto).toBeFalse();
  });

  it('clicar no botão deve abrir o dropdown', () => {
    component.dropdownAberto = !component.dropdownAberto;
    expect(component.dropdownAberto).toBeTrue();
  });

  // Renderização
  it('deve renderizar 4 cards de produto', () => {
    const cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toBe(4);
  });

  it('deve exibir o nome do primeiro produto', () => {
    const nome = fixture.nativeElement.querySelector('.card__nome');
    expect(nome.textContent).toContain('Camiseta Grafite');
  });

  it('deve exibir o título do slide atual', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(component.slides[0].titulo);
  });
});