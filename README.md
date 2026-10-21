# lancer-data-pt-br

Dados do compêndio [LANCER RPG](https://massifpress.com/lancer) traduzidos para **Português do Brasil (pt-BR)**, compatíveis com o [COMP/CON](https://compcon.app).

## Instalação

```bash
npm install lancer-data-pt-br
```

## Uso

```js
import lancerData from 'lancer-data-pt-br';

const { systems, weapons, frames, talents } = lancerData;
```

Ou com import nomeado:

```js
import { systems, weapons } from 'lancer-data-pt-br';
```

## Conteúdo traduzido

| Arquivo | Descrição |
|---|---|
| `actions.json` | Ações básicas e especiais |
| `backgrounds.json` | Antecedentes de piloto |
| `core_bonuses.json` | Bônus de Núcleo |
| `frames.json` | Chassis de mecha |
| `mods.json` | Modificações de armas |
| `pilot_gear.json` | Equipamento de piloto |
| `skills.json` | Perícias |
| `systems.json` | Sistemas de mecha |
| `tags.json` | Tags |
| `talents.json` | Talentos |
| `weapons.json` | Armas |

## Compatibilidade

Compatível com o formato de compêndio do `lancer-data` oficial (Massif Press).  
Para uso com COMP/CON, importe o pacote como conteúdo adicional LCP.

## Lib Resumida para Aplicação (`lib-resumida/`)

Para uso em cards físicos de mesa e no editor interativo, o repositório disponibiliza uma **versão resumida e pré-formatada** dos dados:
- **`lib-resumida/actions.json`**: Ações de combate limpas com tipos exatos de ativação e resumo mecânico.
- **`lib-resumida/weapons.json`**: Armas com resumos táticos objetivos e explicação direta de propriedades/tags em vez de parágrafos extensos de lore.
- **`lib-resumida/systems.json`**: Sistemas com sub-ações, protocolos e posicionáveis (minas/drones) consolidados e legíveis.
- **`lib-resumida/statuses.json`**: Status e condições com efeitos mecânicos imediatos.
- **`lib-resumida/tags.json`**: Tags com resumos de regras práticas.
- **Comando de compilação**: `npm run build:summary` ou `npm run build:cards`.

## Gerador de Cards para Impressão

O repositório inclui uma página interativa pronta para gerar e imprimir cards táticos de mesa para o LANCER RPG, padronizada em formato A4 (9 cards por folha, padrão poker/sleeves 63x88mm):

- **Como abrir**:
  - Catálogo & Impressão: abra [cards.html](file:///c:/Users/lpfon/Downloads/Github/lancer-data-pt-br/cards.html) diretamente no navegador.
  - Editor Direto (WYSIWYG): abra [editor.html](file:///c:/Users/lpfon/Downloads/Github/lancer-data-pt-br/editor.html) para editar qualquer card clicando e digitando sobre ele.
- **Categorias e Cores**:
  - Ações: Borda e cabeçalho Azul
  - Armas: Borda e cabeçalho Vermelho
  - Sistemas: Borda e cabeçalho Verde
  - Status e Condições: Borda e cabeçalho Amarelo / Dourado
- **Recursos**:
  - Edição direta visual (WYSIWYG): clique em qualquer palavra no card para alterar na hora.
  - Filtro por categoria, busca textual e fabricante (GMS, IPS-N, SSC, HÓRUS, HA).
  - Adição rápida com 1 clique (ações básicas, todos status, equipamentos GMS).
  - Pré-visualização exata das folhas A4 com guias de corte pontilhadas para tesoura ou estilete.
  - Script para atualizar dados gerados a partir do `lib/`: `npm run build:cards`.

## Licença

GPL-3.0-or-later
