// build-cards-data.js
// Gera a nova lib resumida (lib-resumida/) e o arquivo empacotado para a aplicação (cards-data.js)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadJson = (filename) => {
  const filePath = path.join(__dirname, 'lib', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const extractText = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    return val.detail || val.text || val.description || val.effect || '';
  }
  return String(val);
};

const cleanText = (text) => {
  const str = extractText(text);
  if (!str) return '';
  return str
    .replace(/<cite:[^>]+>/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/\\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

const ACTIVATION_TRANSLATIONS = {
  'Free': 'Ação Livre',
  'Quick': 'Ação Rápida',
  'Full': 'Ação Completa',
  'Protocol': 'Protocolo',
  'Reaction': 'Reação',
  'Invade': 'Invadir',
  'Livre': 'Ação Livre',
  'Rápida': 'Ação Rápida',
  'Completa': 'Ação Completa'
};

const applyTacticalBolding = (text) => {
  if (!text) return '';
  let str = text;

  // 1. Traduzir tipos de ativação comuns em colchetes
  str = str
    .replace(/\[Free\]/gi, '[Ação Livre]')
    .replace(/\[Quick\]/gi, '[Ação Rápida]')
    .replace(/\[Full\]/gi, '[Ação Completa]')
    .replace(/\[Protocol\]/gi, '[Protocolo]')
    .replace(/\[Reaction\]/gi, '[Reação]')
    .replace(/\[Livre\]/gi, '[Ação Livre]')
    .replace(/\[Rápida\]/gi, '[Ação Rápida]')
    .replace(/\[Completa\]/gi, '[Ação Completa]');

  // 2. Colchetes táticos em negrito: [PF], [Carregamento], [Ação Livre], etc.
  str = str.replace(/(?<!<b>)\[([^\]\n\r]+)\](?!<\/b>)/gu, '<b>[$1]</b>');

  // 3. Termos táticos e ações específicas
  const keywords = [
    // Multi-palavra primeiro para evitar correspondência parcial
    'Ações Livres', 'Ação Livre', 'ações livres', 'ação livre', 'AÇÃO LIVRE',
    'Ações Rápidas', 'Ação Rápida', 'ações rápidas', 'ação rápida', 'AÇÃO RÁPIDA',
    'Ações Completas', 'Ação Completa', 'ações completas', 'ação completa', 'AÇÃO COMPLETA',
    'Reparo Completo', 'reparo completo', 'REPARO COMPLETO',
    'Travar Mira', 'travar mira', 'TRAVAR MIRA',
    'Ataque Improvisado', 'ataque improvisado', 'ATAQUE IMPROVISADO',
    'Programar Rápido', 'programar rápido', 'PROGRAMAR RÁPIDO',
    'Fragmentar Sinal', 'fragmentar sinal', 'FRAGMENTAR SINAL',
    'Buscar Cobertura', 'buscar cobertura', 'BUSCAR COBERTURA',
    'Esconder-se', 'esconder-se', 'ESCONDER-SE',
    'Autodestruição', 'autodestruição', 'AUTODESTRUIÇÃO',

    // Core actions solicitadas pelo usuário e ações de combate padrão
    'SOBRECARREGAR', 'Sobrecarregar',
    'ALVEJAR', 'Alvejar',
    'BARRAGEM', 'Barragem',
    'ESTABILIZAR', 'Estabilizar',
    'EMPURRAR', 'Empurrar',
    'AGARRAR', 'Agarrar',
    'IMPULSIONAR', 'Impulsionar',
    'RETALIAR', 'Retaliar',
    'SUPORTAR', 'Suportar',
    'PREPARAR', 'Preparar',
    'INVADIR', 'Invadir',
    'ESCANEAR', 'Escanear',
    'REFORÇAR', 'Reforçar',
    'DESENGAJAR', 'Desengajar',
    'DESLIGAR', 'Desligar',
    'INICIALIZAÇÃO', 'Inicialização',
    'MONTAR', 'Montar',
    'DESMONTAR', 'Desmontar',
    'EJETAR', 'Ejetar',
    'DESMANTELAR', 'Desmantelar',
    'PROTOCOLO', 'Protocolo',
    'REAÇÃO', 'Reação',

    // Termos e atributos táticos adicionais solicitados pelo usuário
    'SUPERPESADAS', 'Superpesadas', 'superpesadas', 'SUPERPESADA', 'Superpesada', 'superpesada',
    'SUPERPESADOS', 'Superpesados', 'superpesados', 'SUPERPESADO', 'Superpesado', 'superpesado',
    'AUXILIARES', 'Auxiliares', 'auxiliares', 'AUXILIAR', 'Auxiliar', 'auxiliar',
    'PROSTRADOS', 'Prostrados', 'prostrados', 'PROSTRADO', 'Prostrado', 'prostrado',
    'IMPEDIDOS', 'Impedidos', 'impedidos', 'IMPEDIDO', 'Impedido', 'impedido',
    'LENTOS', 'Lentos', 'lentos', 'LENTO', 'Lento', 'lento',
    'ATORDOADOS', 'Atordoados', 'atordoados', 'ATORDOADO', 'Atordoado', 'atordoado', 'ATORDODADOS', 'atordodados',
    'EXPOSTOS', 'Expostos', 'expostos', 'EXPOSTO', 'Exposto', 'exposto',
    'VELOCIDADE', 'Velocidade', 'velocidade',
    'BLINDAGENS', 'Blindagens', 'blindagens', 'BLINDAGEM', 'Blindagem', 'blindagem',
    'ARMADURAS', 'Armaduras', 'armaduras', 'ARMADURA', 'Armadura', 'armadura',
    'RECARGAS', 'Recargas', 'recargas', 'RECARGA', 'Recarga', 'recarga',
    'IA'
  ];

  for (const kw of keywords) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?<!<b>)(?<![\\p{L}\\p{N}_])(${escaped})(?![\\p{L}\\p{N}_])(?!<\\/b>)`, 'gu');
    str = str.replace(regex, '<b>$1</b>');
  }

  // Limpeza de possíveis duplicações acidentais <b><b>...</b></b>
  str = str.replace(/<b>\s*<b>/gi, '<b>').replace(/<\/b>\s*<\/b>/gi, '</b>');

  return str;
};

const cleanSingleLine = (text) => {
  const str = extractText(text);
  if (!str) return '';
  return str
    .replace(/<cite:[^>]+>/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const rawActions = loadJson('actions.json');
const rawWeapons = loadJson('weapons.json');
const rawSystems = loadJson('systems.json');
const rawStatuses = loadJson('statuses.json');
const rawTags = loadJson('tags.json');

// Mapeamento de Tags com explicações curtas e mecânicas
const TAG_RULES = {
  'tg_accurate': 'Precisa (+1d6 no ataque)',
  'tg_inaccurate': 'Imprecisa (+1d6 de dificuldade)',
  'tg_ap': 'PF (ignora Armadura)',
  'tg_loading': 'Carregamento (precisa de ação rápida ou estabilizar para recarregar)',
  'tg_ordnance': 'Artilharia (só pode disparar antes de se mover no turno)',
  'tg_reliable': 'Confiável {VAL} (causa {VAL} de dano mesmo se errar o ataque)',
  'tg_smart': 'Inteligente (ataca a Defesa Tecnológica do alvo)',
  'tg_arcing': 'Arco (ignora cobertura se tiver visão indireta)',
  'tg_seeking': 'Teleguiada (ignora cobertura e linha de visão)',
  'tg_overkill': 'Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)',
  'tg_heat_self': 'Calor {VAL} (sofre {VAL} de calor ao disparar)',
  'tg_heat_target': 'Calor {VAL} (causa {VAL} de calor ao acertar o alvo)',
  'tg_burn': 'Queimadura {VAL} (causa {VAL} de queimadura contínua no alvo)',
  'tg_limited': 'Limitada {VAL} ({VAL} usos por missão)',
  'tg_thrown': 'Arremesso {VAL} (pode ser arremessada até alcance {VAL})',
  'tg_knockback': 'Repulsão {VAL} (empurra o alvo {VAL} espaços)',
  'tg_unique': 'Única (máximo 1 instalada por mecha)',
  'tg_ai': 'IA (Instalação de Inteligência Artificial)',
  'tg_danger_zone': 'Zona de Perigo (efeito ativo com calor a 50%+)',
  'tg_deployable': 'Posicionável em campo de batalha',
  'tg_drone': 'Drone (possui estatísticas e ações próprias)',
  'tg_grenade': 'Granada (alcance 5 / arremessável)',
  'tg_mine': 'Mina (acionada por proximidade)',
  'tg_shield': 'Escudo defensivo',
  'tg_line': 'Linha {VAL} (atinge todos alvos em linha de {VAL} espaços)',
  'tg_cone': 'Cone {VAL} (atinge alvos em cone de {VAL} espaços)',
  'tg_blast': 'Explosão {VAL} (área circular de raio {VAL})',
  'tg_burst': 'Emanação {VAL} (área ao redor do usuário de raio {VAL})',
  'tg_threat': 'Ameaça {VAL} (raio de reação e ataque de oportunidade)'
};

const TRANSLATIONS = {
  mounts: {
    'Auxiliary': 'Auxiliar',
    'Main': 'Principal',
    'Heavy': 'Pesada',
    'Superheavy': 'Superpesada',
    'Ship-class': 'Classe Nave',
    'Integrated': 'Integrada'
  },
  types: {
    'Rifle': 'Rifle',
    'Melee': 'Corpo a Corpo',
    'Cannon': 'Canhão',
    'Launcher': 'Lançador',
    'Nexus': 'Nexo',
    'CQB': 'Combate Próximo (CQB)',
    'Special': 'Especial',
    'Spool Weapon': 'Arma de Carretel',
    '???': 'Desconhecido'
  },
  damage: {
    'Kinetic': 'Cinético',
    'Explosive': 'Explosivo',
    'Energy': 'Energético',
    'Burn': 'Queimadura',
    'Heat': 'Calor',
    'Variable': 'Variável'
  },
  range: {
    'Range': 'Alcance',
    'Threat': 'Ameaça',
    'Line': 'Linha',
    'Blast': 'Explosão',
    'Cone': 'Cone',
    'Burst': 'Emanação'
  }
};

const tagMap = {};
rawTags.forEach(t => {
  tagMap[t.id] = t.name || t.id;
});

// Resumos táticos específicos para armas GMS e compêndio que não tinham effect
const WEAPON_TACTICAL_SUMMARIES = {
  'mw_anti_materiel_rifle': 'Rifle pesado de sniper para longa distância. [PF] Ignora Armadura. [Carregamento] Exige recarga após o disparo. [Artilharia] Dispare antes de se mover.',
  'mw_assault_rifle': 'Fuzil tático de uso geral. [Confiável 2] Causa 2 de dano garantido mesmo se o ataque errar.',
  'mw_charged_blade': 'Lâmina corpo a corpo de alta frequência com fio de energia mono-molecular superaquecido.',
  'mw_cyclone_pulse_rifle': 'Artilharia superpesada de pulso contínuo. Disparo destrutivo devastador com [PF] que ignora armadura.',
  'mw_heavy_charged_blade': 'Espada pesada de alta energia para partir blindagens espessas.',
  'mw_heavy_machine_gun': 'Arma de supressão pesada de alta cadência de fogo contínuo. [Imprecisa] (+1d6 de dificuldade).',
  'mw_heavy_melee_weapon': 'Arma contundente ou cortante pesada (machado, martelo, maça) para impactos maciços corpo a corpo.',
  'mw_howitzer': 'Obuseiro de artilharia pesada. Disparo parabólico em [Explosão 2] que ignora obstáculos e cobertura.',
  'mw_missile_rack': 'Suporte de micromísseis autoguiados de disparo rápido em salva.',
  'mw_mortar': 'Morteiro leve para fogo indireto. Projéteis parabólicos com dispersão em [Explosão 1] que superam cobertura.',
  'mw_nexus_hunter_killer': 'Nexo de drones autônomos de ataque. Ataca a Defesa Tecnológica do alvo com enxame cinético coordenado.',
  'mw_nexus_light': 'Nexo auxiliar compacto de microdrones para suporte e ataques de flanco rápidos.',
  'mw_pistol': 'Pistola de saque rápido para engajamentos a curta distância. Ideal como ataque secundário em Alvejar.',
  'mw_rocket_propelled_grenade': 'Lança-foguetes portátil com ogiva perfurante de blindagem em área [Explosão 1].',
  'mw_segment_knife': 'Faca tática de lâminas descartáveis impressas rapidamente para estocadas ágeis corpo a corpo.',
  'mw_shotgun': 'Escopeta de combate com dispersão de chumbo de alto impacto em curto alcance.',
  'mw_tactical_knife': 'Faca tática leve balanceada. [Arremesso 5] Pode ser arremessada contra alvos a curta distância.',
  'mw_tactical_melee_weapon': 'Arma corpo a corpo padrão balanceada (espada, machado de mão, bastão de choque).',
  'mw_thermal_rifle': 'Fuzil de feixe térmico concentrado. Causa dano de Queimadura contínua que derrete chapas de blindagem.',
  'mw_autocannon': 'Canhão automático com rajadas perfurantes de alta cadência.'
};


// ==========================================
// 1. PROCESSAR E RESUMIR ARMAS
// ==========================================
const summarizedWeapons = rawWeapons.map(w => {
  const mountLabel = TRANSLATIONS.mounts[w.mount] || w.mount || 'Principal';
  const typeLabel = TRANSLATIONS.types[w.type] || w.type || 'Arma';

  const damageStr = (w.damage || []).map(d => {
    const t = TRANSLATIONS.damage[d.type] || d.type;
    return `${d.val} ${t}`;
  }).join(' + ');

  const primaryDamage = w.damage && w.damage.length ? w.damage[0].val : '-';
  const primaryDamageType = w.damage && w.damage.length ? (TRANSLATIONS.damage[w.damage[0].type] || w.damage[0].type) : '-';

  const rangeStr = (w.range || []).map(r => {
    const t = TRANSLATIONS.range[r.type] || r.type;
    return `${t} ${r.val}`;
  }).join(', ');

  const primaryRangeVal = w.range && w.range.length ? w.range[0].val : '-';
  const primaryRangeType = w.range && w.range.length ? (TRANSLATIONS.range[w.range[0].type] || w.range[0].type) : '-';

  const tagsList = (w.tags || []).map(t => {
    let name = tagMap[t.id] || t.id.replace(/^tg_/, '');
    if (t.val !== undefined) name = name.replace('{VAL}', t.val);
    return name;
  });

  const tagsSummaries = (w.tags || []).map(t => {
    let rule = TAG_RULES[t.id];
    if (rule) {
      if (t.val !== undefined) rule = rule.replace(/\{VAL\}/g, t.val);
      return rule;
    }
    return null;
  }).filter(Boolean);

  let effectText = cleanText(w.effect);
  let specialRules = [];

  if (w.on_hit) specialRules.push(`[No Acerto] ${cleanSingleLine(w.on_hit)}`);
  if (w.on_crit) specialRules.push(`[No Crítico] ${cleanSingleLine(w.on_crit)}`);
  if (w.on_attack) specialRules.push(`[Ao Atacar] ${cleanSingleLine(w.on_attack)}`);
  if (w.actions && w.actions.length) {
    w.actions.forEach(a => {
      const actName = a.name || 'Ação Especial';
      const rawActType = a.activation || 'Ação';
      const actType = ACTIVATION_TRANSLATIONS[rawActType] || rawActType;
      specialRules.push(`[${actType}] ${actName}: ${cleanSingleLine(a.detail || a.trigger || '')}`);
    });
  }

  let tacticalTerse = '';
  if (effectText) {
    tacticalTerse = effectText;
    if (specialRules.length) tacticalTerse += '\n' + specialRules.join('\n');
  } else if (specialRules.length) {
    tacticalTerse = specialRules.join('\n');
    if (tagsSummaries.length) tacticalTerse += '\nTags: ' + tagsSummaries.join(' • ');
  } else if (WEAPON_TACTICAL_SUMMARIES[w.id]) {
    tacticalTerse = WEAPON_TACTICAL_SUMMARIES[w.id];
  } else if (tagsSummaries.length) {
    tacticalTerse = `${mountLabel} ${typeLabel}. ` + tagsSummaries.join(' • ');
  } else {
    tacticalTerse = cleanSingleLine(w.description) || `${mountLabel} ${typeLabel} padrão de combate.`;
  }

  const detailText = [
    tacticalTerse,
    tagsSummaries.length ? `\nPropriedades:\n• ` + tagsSummaries.join('\n• ') : ''
  ].filter(Boolean).join('\n');

  return {
    id: w.id,
    category: 'weapon',
    name: w.name,
    mount: mountLabel,
    type: typeLabel,
    damage: damageStr || '-',
    damage_val: primaryDamage,
    damage_type: primaryDamageType,
    range: rangeStr || '-',
    range_val: primaryRangeVal,
    range_type: primaryRangeType,
    sp: w.sp || 0,
    tags: tagsList,
    tags_summary: tagsSummaries.join('; '),
    terse: applyTacticalBolding(cleanText(tacticalTerse)),
    detail: applyTacticalBolding(cleanText(detailText)),
    source: w.source || 'GMS',
    license: w.license || 'GMS',
    license_level: w.license_level !== undefined ? w.license_level : 0
  };
});

// ==========================================
// 2. PROCESSAR E RESUMIR SISTEMAS
// ==========================================
const summarizedSystems = rawSystems.map(s => {
  const tagsList = (s.tags || []).map(t => {
    let name = tagMap[t.id] || t.id.replace(/^tg_/, '');
    if (t.val !== undefined) name = name.replace('{VAL}', t.val);
    return name;
  });

  const actionRules = [];
  if (s.actions && s.actions.length) {
    s.actions.forEach(a => {
      const rawActType = a.activation || 'Ação';
      const actType = ACTIVATION_TRANSLATIONS[rawActType] || rawActType;
      const actName = a.name || 'Habilidade';
      const detail = cleanSingleLine(a.detail || a.trigger || '');
      actionRules.push(`[${actType}] ${actName}: ${detail}`);
    });
  }

  const deployableRules = [];
  if (s.deployables && s.deployables.length) {
    s.deployables.forEach(d => {
      const depName = d.name || 'Posicionável';
      const depType = d.type || 'Deployable';
      const detail = cleanSingleLine(d.detail || '');
      deployableRules.push(`[Posicionável: ${depName} (${depType})] ${detail}`);
    });
  }

  let effectText = cleanText(s.effect);
  let combinedRules = [];

  if (effectText) combinedRules.push(effectText);
  if (actionRules.length) combinedRules.push(actionRules.join('\n'));
  if (deployableRules.length) combinedRules.push(deployableRules.join('\n'));

  let tacticalTerse = combinedRules.join('\n\n');
  if (!tacticalTerse) {
    tacticalTerse = cleanSingleLine(s.description) || 'Sistema tático de mecha.';
  }

  return {
    id: s.id,
    category: 'system',
    name: s.name,
    sp: s.sp || 0,
    type: s.type || 'Sistema',
    tags: tagsList,
    actions: s.actions || [],
    deployables: s.deployables || [],
    terse: applyTacticalBolding(cleanText(tacticalTerse)),
    detail: applyTacticalBolding(cleanText(tacticalTerse)),
    source: s.source || 'GMS',
    license: s.license || 'GMS',
    license_level: s.license_level !== undefined ? s.license_level : 0
  };
});

// ==========================================
// 3. PROCESSAR E RESUMIR AÇÕES
// ==========================================
const summarizedActions = rawActions.map(a => {
  const rawActivation = a.activation || 'Ação';
  const activation = ACTIVATION_TRANSLATIONS[rawActivation] || rawActivation;

  return {
    id: a.id,
    category: 'action',
    name: a.name,
    activation: activation,
    terse: applyTacticalBolding(cleanText(a.terse || a.detail)),
    detail: applyTacticalBolding(cleanText(a.detail || a.terse)),
    tags: a.add_status ? a.add_status.map(st => `Aplica: ${st.id}`) : [],
    source: 'REGRAS BÁSICAS'
  };
});

// ==========================================
// 4. PROCESSAR E RESUMIR STATUS & CONDIÇÕES
// ==========================================
const summarizedStatuses = rawStatuses.map(st => {
  const isCond = st.type && st.type.toLowerCase().includes('cond');
  return {
    id: st.id,
    category: 'status',
    name: st.name,
    type: isCond ? 'Condição' : 'Status',
    exclusive: st.exclusive || null,
    terse: applyTacticalBolding(cleanText(st.terse || st.effects)),
    detail: applyTacticalBolding(cleanText(st.effects || st.terse)),
    source: 'REGRAS BÁSICAS'
  };
});

// ==========================================
// 5. PROCESSAR E RESUMIR TAGS
// ==========================================
const summarizedTags = rawTags.map(t => ({
  id: t.id,
  name: t.name || t.id,
  short_rule: TAG_RULES[t.id] || cleanSingleLine(t.description),
  description: cleanText(t.description)
}));

// ==========================================
// GRAVAR LIB RESUMIDA EM lib-resumida/
// ==========================================
const summaryDir = path.join(__dirname, 'lib-resumida');
if (!fs.existsSync(summaryDir)) {
  fs.mkdirSync(summaryDir, { recursive: true });
}

fs.writeFileSync(path.join(summaryDir, 'actions.json'), JSON.stringify(summarizedActions, null, 2), 'utf-8');
fs.writeFileSync(path.join(summaryDir, 'weapons.json'), JSON.stringify(summarizedWeapons, null, 2), 'utf-8');
fs.writeFileSync(path.join(summaryDir, 'systems.json'), JSON.stringify(summarizedSystems, null, 2), 'utf-8');
fs.writeFileSync(path.join(summaryDir, 'statuses.json'), JSON.stringify(summarizedStatuses, null, 2), 'utf-8');
fs.writeFileSync(path.join(summaryDir, 'tags.json'), JSON.stringify(summarizedTags, null, 2), 'utf-8');

// Gerar index.js para lib-resumida
const summaryIndexContent = `// lib-resumida/index.js - Compêndio Resumido Oficial para Cards de LANCER RPG (PT-BR)
import actions from './actions.json';
import weapons from './weapons.json';
import systems from './systems.json';
import statuses from './statuses.json';
import tags from './tags.json';

export {
  actions,
  weapons,
  systems,
  statuses,
  tags
};

export default {
  actions,
  weapons,
  systems,
  statuses,
  tags
};
`;
fs.writeFileSync(path.join(summaryDir, 'index.js'), summaryIndexContent, 'utf-8');

// ==========================================
// GRAVAR cards-data.js EMPACOTADO PARA A APLICAÇÃO
// ==========================================
const appBundle = {
  actions: summarizedActions,
  weapons: summarizedWeapons,
  systems: summarizedSystems,
  statuses: summarizedStatuses,
  tags: summarizedTags
};

const bundleOutput = `/**
 * cards-data.js - Banco de Dados Resumido e Pré-processado para Cards LANCER RPG
 * Tradução PT-BR • Compêndio Otimizado para Impressão de Mesa e Editor
 * Total: ${summarizedActions.length} Ações | ${summarizedWeapons.length} Armas | ${summarizedSystems.length} Sistemas | ${summarizedStatuses.length} Status
 */
window.LANCER_CARDS_DATA = ${JSON.stringify(appBundle, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'cards-data.js'), bundleOutput, 'utf-8');

console.log('--- SUCESSO: Lib Resumida e cards-data.js Gerados! ---');
console.log('Diretório lib-resumida/ criado:');
console.log(' - actions.json: ', summarizedActions.length, 'ações');
console.log(' - weapons.json: ', summarizedWeapons.length, 'armas com resumos táticos');
console.log(' - systems.json: ', summarizedSystems.length, 'sistemas com ações consolidadas');
console.log(' - statuses.json:', summarizedStatuses.length, 'status e condições');
console.log(' - tags.json:    ', summarizedTags.length, 'tags explicadas');
console.log('cards-data.js atualizado com sucesso.');
