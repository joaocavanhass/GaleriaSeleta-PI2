import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../core/models/produto.model';
import { PRODUTOS_MOCK } from '../core/mocks/produtos.mock';

export interface SlideHero {
  id: number;
  url: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // ── Carrossel Hero ──────────────────────────────────────────
  slides: SlideHero[] = [
    { id: 1, url: '', alt: 'Coleção primavera' },
    { id: 2, url: '', alt: 'Peças exclusivas' },
    { id: 3, url: '', alt: 'Novidades da semana' },
  ];
  currentSlide = 0;
  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  // ── Marquee Novidades ────────────────────────────────────────
  produtosNovidades: Produto[] = PRODUTOS_MOCK
    .filter(p => p.status === 'ativo')
    .sort((a, b) => new Date(b.criado_em).getTime() - new Date(a.criado_em).getTime())
    .slice(0, 8);

  get produtosMarquee(): Produto[] {
    return [...this.produtosNovidades, ...this.produtosNovidades];
  }

  // ── Lifecycle ────────────────────────────────────────────────
  ngOnInit(): void {
    // Autoplay apenas no browser — evita travar o prerender SSR
    if (isPlatformBrowser(this.platformId)) {
      this.iniciarAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.pararAutoplay();
  }

  // ── Métodos do Carrossel ─────────────────────────────────────
  iniciarAutoplay(): void {
    this.autoplayTimer = setInterval(() => this.proximo(), 4000);
  }

  pararAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  proximo(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  anterior(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  irPara(index: number): void {
    this.currentSlide = index;
  }

  // ── Helpers ──────────────────────────────────────────────────
  precoFinal(p: Produto): number {
    return p.preco_desconto ?? p.preco;
  }

  temDesconto(p: Produto): boolean {
    return p.preco_desconto !== null && p.preco_desconto < p.preco;
  }
}
