export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  preco_desconto: number | null;
  imagem_url: string;
  categoria: string;
  status: 'ativo' | 'inativo';
  criado_em: string;
}
