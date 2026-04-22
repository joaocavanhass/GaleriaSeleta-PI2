# Galeria Seleta 2.0 — Instruções de Desenvolvimento

## Projeto
Aplicação Angular (pasta `galeria-seleta/`) da loja Galeria Seleta.

## Design de Referência — Figma

**OBRIGATÓRIO:** Toda alteração em ficheiros `.html`, `.css`, `.ts` deve usar o design do Figma como base.

- **Ficheiro:** Galeria Seleta 2.0
- **File Key:** `A8mwHrsKx9GovWR5h6Odj5`
- **Token:** disponível na variável de ambiente `$FIGMA_TOKEN`

### Telas do projeto (página: "Novo Tamplate GS 2.0")

| Tela | Node ID |
|------|---------|
| Sec - Início | `2137:59` |
| Sec - Novidades | `2137:57` |
| Sec - Produtos | `2137:56` |
| Sec - Sobre nós | `2137:58` |
| Sec - Sacola de compras | `2137:60` |
| Sec - Forma de pagamento | `2137:54` |
| Sec - Pagamento | `2137:55` |
| Sec - Final | `2137:61` |

### Como consultar uma tela específica

```bash
# Detalhes de uma tela (substitui NODE_ID pelo id da tabela acima)
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FIGMA_FILE_KEY/nodes?ids=NODE_ID" | python3 -m json.tool

# Exportar imagem de uma tela (PNG)
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/images/$FIGMA_FILE_KEY?ids=NODE_ID&format=png"
```

### Correspondência Componentes Angular ↔ Telas Figma

| Componente Angular | Tela Figma |
|---|---|
| `home/` | Sec - Início |
| `produtos/` | Sec - Produtos |
| `login/` | Tela login |
| `cadastro/` | Tela Criar conta |
| `header/` | (presente em todas as telas) |
| `footer/` | Sec - Final |

## Fluxo de trabalho

1. Antes de alterar um componente, consulta a tela Figma correspondente
2. Extrai cores, tamanhos, fontes e espaçamentos do design
3. Implementa fielmente ao design do Figma
4. Se o node ID da tela não estiver na tabela, consulta a API: `GET /v1/files/$FIGMA_FILE_KEY?depth=2`
