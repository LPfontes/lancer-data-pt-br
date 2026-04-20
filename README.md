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
| `core_bonuses.json` | Bônus de núcleo |
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

## Licença

GPL-3.0-or-later
