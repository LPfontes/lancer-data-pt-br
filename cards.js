/**
 * cards.js - Lógica do Gerador e Impressão de Cards para LANCER RPG
 */

(function () {
  'use strict';

  // Estado da Aplicação
  const state = {
    allCards: [],
    customCards: [],
    queue: {}, // { cardId: quantity }
    activeTab: 'catalog', // 'catalog' | 'preview'
    filterCategory: 'all', // 'all' | 'action' | 'weapon' | 'system' | 'status'
    filterSearch: '',
    filterSource: 'all',
    filterOnlyQueued: false,
    printCutLines: true,
    cardTextMode: 'terse', // 'terse' | 'full'
    printTextSize: 'md',   // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    editingCard: null
  };

  // Mapeamento de traduções e rótulos
  const TRANSLATIONS = {
    mounts: {
      'Auxiliary': 'Auxiliar',
      'Main': 'Principal',
      'Heavy': 'Pesada',
      'Superheavy': 'Superpesada',
      'Flex': 'Flexível',
      'Integrated': 'Integrada'
    },
    damageTypes: {
      'Kinetic': 'Cinético',
      'Explosive': 'Explosivo',
      'Energy': 'Energético',
      'Burn': 'Queimadura',
      'Heat': 'Calor',
      'Variable': 'Variável'
    },
    rangeTypes: {
      'Range': 'Alcance',
      'Threat': 'Ameaça',
      'Line': 'Linha',
      'Blast': 'Explosão',
      'Cone': 'Cone',
      'Burst': 'Emanação'
    },
    categories: {
      'action': { label: 'Ação', colorClass: 'card-action', code: 'AÇÃO' },
      'weapon': { label: 'Arma', colorClass: 'card-weapon', code: 'ARMA' },
      'system': { label: 'Sistema', colorClass: 'card-system', code: 'SISTEMA' },
      'status': { label: 'Status / Condição', colorClass: 'card-status', code: 'STATUS' }
    }
  };

  // Inicialização
  document.addEventListener('DOMContentLoaded', async () => {
    loadLocalSettings();
    await initializeData();
    setupEventListeners();
    updateUI();
  });

  function loadLocalSettings() {
    try {
      const savedQueue = localStorage.getItem('lancer_print_queue');
      if (savedQueue) state.queue = JSON.parse(savedQueue);

      const savedCustom = localStorage.getItem('lancer_custom_cards');
      if (savedCustom) state.customCards = JSON.parse(savedCustom);
    } catch (e) {
      console.warn('Erro ao carregar dados do localStorage:', e);
    }
  }

  function saveQueue() {
    try {
      localStorage.setItem('lancer_print_queue', JSON.stringify(state.queue));
    } catch (e) {}
  }

  function saveCustomCards() {
    try {
      localStorage.setItem('lancer_custom_cards', JSON.stringify(state.customCards));
    } catch (e) {}
  }

  // Carregamento de dados (via cards-data.js ou fetch)
  async function initializeData() {
    let rawData = window.LANCER_CARDS_DATA;

    if (!rawData) {
      try {
        const [actions, weapons, systems, statuses, tags] = await Promise.all([
          fetch('./lib/actions.json').then(r => r.json()),
          fetch('./lib/weapons.json').then(r => r.json()),
          fetch('./lib/systems.json').then(r => r.json()),
          fetch('./lib/statuses.json').then(r => r.json()),
          fetch('./lib/tags.json').then(r => r.json())
        ]);
        rawData = { actions, weapons, systems, statuses, tags };
      } catch (err) {
        console.error('Falha ao carregar dados do LANCER:', err);
        alert('Não foi possível carregar os dados. Verifique se cards-data.js ou a pasta lib/ estão presentes.');
        return;
      }
    }

    // Criar mapa de tags para nomes em pt-BR
    const tagMap = {};
    if (rawData.tags && Array.isArray(rawData.tags)) {
      rawData.tags.forEach(t => {
        tagMap[t.id] = t.name || t.id;
      });
    }

    // Processar Ações (Azul)
    const normalizedActions = (rawData.actions || []).map(act => ({
      id: act.id || `act_${act.name.toLowerCase().replace(/\s+/g, '_')}`,
      category: 'action',
      name: act.name,
      activation: act.activation || 'Ação',
      terse: act.terse || '',
      detail: act.detail || '',
      source: 'REGRAS BÁSICAS'
    }));

    // Processar Armas (Vermelho)
    const normalizedWeapons = (rawData.weapons || []).map(wp => {
      // Suporta formato resumido (string) ou bruto (array de dano)
      const damageStr = typeof wp.damage === 'string' ? wp.damage : (wp.damage || []).map(d => {
        const typeName = TRANSLATIONS.damageTypes[d.type] || d.type;
        return `${d.val} ${typeName}`;
      }).join(' + ');

      // Suporta formato resumido (string) ou bruto (array de alcance)
      const rangeStr = typeof wp.range === 'string' ? wp.range : (wp.range || []).map(r => {
        const typeName = TRANSLATIONS.rangeTypes[r.type] || r.type;
        return `${typeName} ${r.val}`;
      }).join(', ');

      const tagsList = (wp.tags || []).map(t => {
        if (typeof t === 'string') return t;
        const rawName = tagMap[t.id] || t.id.replace(/^tg_/, '');
        if (t.val !== undefined) {
          return rawName.replace('{VAL}', t.val);
        }
        return rawName;
      });

      const mountLabel = TRANSLATIONS.mounts[wp.mount] || wp.mount || 'Principal';

      return {
        id: wp.id,
        category: 'weapon',
        name: wp.name,
        mount: mountLabel,
        type: wp.type || 'Arma',
        damage: damageStr,
        range: rangeStr,
        tags: tagsList,
        terse: wp.terse || wp.effect || wp.description || '',
        detail: wp.detail || wp.description || wp.effect || '',
        source: wp.source || 'GMS',
        license: wp.license || '',
        license_level: wp.license_level !== undefined ? wp.license_level : 0
      };
    });

    // Processar Sistemas (Verde)
    const normalizedSystems = (rawData.systems || []).map(sys => {
      const tagsList = (sys.tags || []).map(t => {
        if (typeof t === 'string') return t;
        const rawName = tagMap[t.id] || t.id.replace(/^tg_/, '');
        if (t.val !== undefined) return rawName.replace('{VAL}', t.val);
        return rawName;
      });

      return {
        id: sys.id,
        category: 'system',
        name: sys.name,
        sp: sys.sp || 0,
        type: sys.type || 'Sistema',
        tags: tagsList,
        terse: sys.terse || sys.effect || sys.description || '',
        detail: sys.detail || sys.description || sys.effect || '',
        actions: sys.actions || [],
        deployables: sys.deployables || [],
        source: sys.source || 'GMS',
        license: sys.license || '',
        license_level: sys.license_level !== undefined ? sys.license_level : 0
      };
    });

    // Processar Status & Condições (Amarelo)
    const normalizedStatuses = (rawData.statuses || []).map(st => {
      const isCond = st.type && st.type.toLowerCase().includes('cond');
      return {
        id: st.id,
        category: 'status',
        name: st.name,
        type: isCond ? 'Condição' : 'Status',
        exclusive: st.exclusive || null,
        terse: st.terse || '',
        detail: st.effects || st.terse || '',
        source: 'REGRAS BÁSICAS'
      };
    });

    // Unir catálogo completo com cards customizados do usuário
    state.allCards = [
      ...normalizedActions,
      ...normalizedWeapons,
      ...normalizedSystems,
      ...normalizedStatuses,
      ...state.customCards
    ];

    console.log(`Dados carregados: ${state.allCards.length} cards disponíveis.`);
  }

  // Gerador de HTML de um Card Individual (Modelo Oficial COMP/CON)
  function renderCardHtml(card, options = {}) {
    const cat = card.category || 'action';
    const catConfig = TRANSLATIONS.categories[cat] || TRANSLATIONS.categories.action;
    const isFullText = options.textMode === 'full' || state.cardTextMode === 'full';
    const icons = window.CC_ICONS || {};

    let headerLogoSvg = icons.gms || '';
    if (cat === 'action') headerLogoSvg = icons.action || '';
    if (cat === 'system') headerLogoSvg = icons.system || '';
    if (cat === 'status') headerLogoSvg = icons.status || '';

    let statsRowHtml = '';
    let tagsRowHtml = '';

    if (cat === 'weapon') {
      // Estatística 1: Alcance ou Ameaça
      let stat1Svg = icons.range || '';
      let stat1Val = '-';
      let stat1Label = 'ALCANCE';
      if (card.range) {
        if (card.range.toLowerCase().includes('ameaça')) {
          stat1Svg = icons.threat || '';
          stat1Label = 'AMEAÇA';
          stat1Val = card.range.replace(/[^0-9]/g, '') || card.range;
        } else {
          stat1Svg = icons.range || '';
          stat1Label = 'ALCANCE';
          stat1Val = card.range.replace(/[^0-9]/g, '') || card.range;
        }
      }

      // Estatística 2: Dano
      let stat2Svg = icons.kinetic || '';
      let stat2Val = '-';
      let stat2Label = 'DANO';
      if (card.damage) {
        stat2Val = card.damage.split(' ')[0] || card.damage;
        const dmgLower = card.damage.toLowerCase();
        if (dmgLower.includes('cinét') || dmgLower.includes('kinet')) {
          stat2Svg = icons.kinetic || '';
          stat2Label = 'CINÉTICO';
        } else if (dmgLower.includes('explos')) {
          stat2Svg = icons.explosive || '';
          stat2Label = 'EXPLOSIVO';
        } else if (dmgLower.includes('energ')) {
          stat2Svg = icons.energy || '';
          stat2Label = 'ENERGÉTICO';
        } else if (dmgLower.includes('queim') || dmgLower.includes('burn')) {
          stat2Svg = icons.burn || '';
          stat2Label = 'QUEIMADURA';
        } else if (dmgLower.includes('calor') || dmgLower.includes('heat')) {
          stat2Svg = icons.heat || '';
          stat2Label = 'CALOR';
        }
      }

      statsRowHtml = `
        <div class="cc-stats-row">
          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-svg">${stat1Svg}</span>
              <span class="cc-stat-num">${stat1Val}</span>
            </div>
            <div class="cc-stat-overline">${stat1Label}</div>
          </div>

          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-svg" style="color:var(--color-weapon-border);">${stat2Svg}</span>
              <span class="cc-stat-num">${stat2Val}</span>
            </div>
            <div class="cc-stat-overline">${stat2Label}</div>
          </div>

          <div class="cc-meta-block">
            <div class="cc-meta-title">${card.mount || 'Principal'} ${card.type || 'Arma'}</div>
            <div class="cc-meta-license">${card.source || 'GMS'} ${card.license_level !== undefined ? card.license_level : 0}</div>
          </div>
        </div>
      `;

      if (card.tags && card.tags.length > 0) {
        tagsRowHtml = `
          <div class="cc-tags-row">
            ${card.tags.map(t => `<span class="cc-tag-chip"><b>${t}</b></span>`).join('')}
          </div>
        `;
      }
    } else if (cat === 'action') {
      statsRowHtml = `
        <div class="cc-stats-row">
          <div class="cc-stat-block" style="min-width:60px;">
            <div class="cc-stat-top">
              <span class="cc-stat-svg" style="color:var(--color-action-border);">${icons.action || ''}</span>
              <span class="cc-stat-num" style="font-size:11pt;">${card.activation || 'Ação'}</span>
            </div>
            <div class="cc-stat-overline">ATIVAÇÃO</div>
          </div>

          <div class="cc-meta-block">
            <div class="cc-meta-title">AÇÃO DE COMBATE</div>
            <div class="cc-meta-license">REGRAS BÁSICAS</div>
          </div>
        </div>
      `;
    } else if (cat === 'system') {
      statsRowHtml = `
        <div class="cc-stats-row">
          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-svg" style="color:var(--color-system-border);">${icons.system || ''}</span>
              <span class="cc-stat-num">${card.sp || 0} SP</span>
            </div>
            <div class="cc-stat-overline">CUSTO SISTEMA</div>
          </div>

          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-num" style="font-size:10pt;">${card.type || 'Sistema'}</span>
            </div>
            <div class="cc-stat-overline">TIPO</div>
          </div>

          <div class="cc-meta-block">
            <div class="cc-meta-title">SISTEMA TÁTICO</div>
            <div class="cc-meta-license">${card.source || 'GMS'} ${card.license_level !== undefined ? card.license_level : 0}</div>
          </div>
        </div>
      `;

      if (card.tags && card.tags.length > 0) {
        tagsRowHtml = `
          <div class="cc-tags-row">
            ${card.tags.map(t => `<span class="cc-tag-chip"><b>${t}</b></span>`).join('')}
          </div>
        `;
      }
    } else if (cat === 'status') {
      statsRowHtml = `
        <div class="cc-stats-row">
          <div class="cc-stat-block" style="min-width:65px;">
            <div class="cc-stat-top">
              <span class="cc-stat-svg" style="color:var(--color-status-border);">${icons.status || ''}</span>
              <span class="cc-stat-num" style="font-size:11pt;">${card.type || 'Status'}</span>
            </div>
            <div class="cc-stat-overline">CLASSIFICAÇÃO</div>
          </div>

          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-num" style="font-size:10.5pt;">${card.exclusive || 'GERAL'}</span>
            </div>
            <div class="cc-stat-overline">ALVO</div>
          </div>

          <div class="cc-meta-block">
            <div class="cc-meta-title">ESTADO TÁTICO</div>
            <div class="cc-meta-license">REGRAS BÁSICAS</div>
          </div>
        </div>
      `;
    }

    // Texto de descrição / compêndio
    const cleanTerse = cleanText(card.terse);
    const cleanDetail = cleanText(card.detail);
    let descContent = cleanTerse;
    if (isFullText && cleanDetail) {
      descContent = cleanDetail;
    } else if (!cleanTerse && cleanDetail) {
      descContent = cleanDetail;
    }
    descContent = applyTacticalBolding(descContent);

    const textSizeClass = card.textSize ? `text-size-${card.textSize}` : '';

    return `
      <div class="lancer-card cc-model ${catConfig.colorClass} ${textSizeClass}" data-card-id="${card.id}">
        
        <!-- CABEÇALHO COMP/CON -->
        <div class="cc-header">
          <div class="cc-header-logo">${headerLogoSvg}</div>
          <div class="cc-header-title" title="${card.name}">${card.name}</div>
          <div class="cc-header-book">${icons.book || ''}</div>
        </div>

        <!-- LINHA DE ESTATÍSTICAS -->
        ${statsRowHtml}

        <!-- LINHA DE TAGS -->
        ${tagsRowHtml}

        <!-- DIVISOR COM ÍCONE -->
        <div class="cc-divider-row">
          <div class="cc-divider-line"></div>
          <div class="cc-divider-icon">${icons.divider || ''}</div>
          <div class="cc-divider-line"></div>
        </div>

        <!-- SEÇÃO DO COMPÊNDIO -->
        <div class="cc-compendium-section">
          <div class="cc-overline">//Dados do compêndio</div>
          <div class="cc-flavor-text">
            ${descContent || 'Sem dados adicionais.'}
          </div>
        </div>

      </div>
    `;
  }

  const TACTICAL_KEYWORDS = [
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

  function applyTacticalBolding(text) {
    if (!text) return '';
    let str = text;
    str = str.replace(/(?<!<b>)\[([^\]\n\r]+)\](?!<\/b>)/gu, '<b>[$1]</b>');

    for (const kw of TACTICAL_KEYWORDS) {
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<!<b>)(?<![\\p{L}\\p{N}_])(${escaped})(?![\\p{L}\\p{N}_])(?!<\\/b>)`, 'gu');
      str = str.replace(regex, '<b>$1</b>');
    }

    return str.replace(/<b>\s*<b>/gi, '<b>').replace(/<\/b>\s*<\/b>/gi, '</b>');
  }

  function cleanText(text) {
    if (!text) return '';
    return text
      .replace(/<cite:[^>]+>/g, '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/\\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Atualizar a Interface
  function updateUI() {
    updateQueueBadge();

    if (state.activeTab === 'catalog') {
      renderCatalog();
    } else {
      renderPrintPreview();
    }
  }

  function updateQueueBadge() {
    const totalCount = Object.values(state.queue).reduce((acc, q) => acc + q, 0);
    const badgeCount = document.getElementById('queueCountBadge');
    const badgePages = document.getElementById('queuePagesBadge');

    if (badgeCount) badgeCount.textContent = totalCount;
    if (badgePages) {
      const pages = Math.ceil(totalCount / 9);
      badgePages.textContent = `${pages} ${pages === 1 ? 'folha A4' : 'folhas A4'}`;
    }
  }

  // Renderizar o Catálogo na Tela
  function renderCatalog() {
    const container = document.getElementById('catalogContainer');
    if (!container) return;

    const filtered = getFilteredCards();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <h3>Nenhum card encontrado</h3>
          <p>Tente ajustar os termos de busca ou mudar a categoria selecionada.</p>
          <button class="btn btn-secondary" id="btnResetFilters">Limpar Filtros</button>
        </div>
      `;
      const btnReset = document.getElementById('btnResetFilters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          state.filterSearch = '';
          state.filterCategory = 'all';
          state.filterSource = 'all';
          state.filterOnlyQueued = false;
          const searchInput = document.getElementById('searchInput');
          if (searchInput) searchInput.value = '';
          updateCategoryPills();
          updateUI();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(card => {
      const qty = state.queue[card.id] || 0;
      return `
        <div class="catalog-item-wrapper">
          <div class="catalog-card-container">
            ${renderCardHtml(card)}
          </div>
          <div class="catalog-controls">
            <a href="editor.html?id=${card.id}" class="btn btn-secondary btn-sm" style="text-decoration:none;">
              Editar
            </a>
            <div class="qty-counter">
              <button class="qty-btn" onclick="window.LancerApp.changeQty('${card.id}', -1)">-</button>
              <span class="qty-num">${qty}</span>
              <button class="qty-btn" onclick="window.LancerApp.changeQty('${card.id}', 1)">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Renderizar Visualização Pronta para Impressão (Grade 3x3 por folha A4)
  function renderPrintPreview() {
    const container = document.getElementById('printPreviewContainer');
    if (!container) return;

    // Gerar lista expandida com base na quantidade na fila
    const printList = [];
    state.allCards.forEach(card => {
      const qty = state.queue[card.id] || 0;
      for (let i = 0; i < qty; i++) {
        printList.push(card);
      }
    });

    if (printList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>Fila de Impressão Vazia</h3>
          <p>Você ainda não adicionou cards para imprimir. Volte ao catálogo e clique no botão "+" para adicionar cards à fila, ou use um dos botões rápidos!</p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="window.LancerApp.quickAddBasicActions()">+ Adicionar Ações Básicas</button>
            <button class="btn btn-primary" onclick="window.LancerApp.quickAddStatuses()">+ Adicionar Todos Status</button>
          </div>
        </div>
      `;
      return;
    }

    // Dividir em páginas de 9 cards cada (3x3 por folha A4)
    const CARDS_PER_PAGE = 9;
    const pages = [];
    for (let i = 0; i < printList.length; i += CARDS_PER_PAGE) {
      pages.push(printList.slice(i, i + CARDS_PER_PAGE));
    }

    const cutClass = state.printCutLines ? 'cut-lines-enabled' : '';

    container.innerHTML = pages.map((pageCards, pageIndex) => `
      <div class="print-page-sheet ${cutClass}">
        <div class="print-page-header">
          <span>LANCER RPG // CARDS DE COMBATE</span>
          <span>PÁGINA ${pageIndex + 1} DE ${pages.length} (${pageCards.length} CARDS)</span>
        </div>
        <div class="print-grid-3x3 text-size-${state.printTextSize || 'md'}">
          ${pageCards.map(c => renderCardHtml(c)).join('')}
        </div>
      </div>
    `).join('');
  }

  // Filtragem
  function getFilteredCards() {
    return state.allCards.filter(card => {
      // Filtro de Categoria
      if (state.filterCategory !== 'all' && card.category !== state.filterCategory) {
        return false;
      }

      // Filtro de Fabricante / Fonte
      if (state.filterSource !== 'all') {
        const src = (card.source || '').toUpperCase();
        if (state.filterSource === 'GMS' && !src.includes('GMS') && !src.includes('SMG')) return false;
        if (state.filterSource === 'IPS-N' && !src.includes('IPS-N') && !src.includes('EIP')) return false;
        if (state.filterSource === 'SSC' && !src.includes('SSC') && !src.includes('SMITH')) return false;
        if (state.filterSource === 'HORUS' && !src.includes('HORUS') && !src.includes('HÓRUS')) return false;
        if (state.filterSource === 'HA' && !src.includes('HA') && !src.includes('HARRISON')) return false;
      }

      // Filtro apenas enfileirados
      if (state.filterOnlyQueued && (!state.queue[card.id] || state.queue[card.id] <= 0)) {
        return false;
      }

      // Filtro de Busca por texto
      if (state.filterSearch) {
        const query = state.filterSearch.toLowerCase();
        const matchName = card.name.toLowerCase().includes(query);
        const matchTerse = (card.terse || '').toLowerCase().includes(query);
        const matchDetail = (card.detail || '').toLowerCase().includes(query);
        const matchTags = (card.tags || []).some(t => t.toLowerCase().includes(query));
        const matchType = (card.type || '').toLowerCase().includes(query);
        const matchMount = (card.mount || '').toLowerCase().includes(query);
        if (!matchName && !matchTerse && !matchDetail && !matchTags && !matchType && !matchMount) {
          return false;
        }
      }

      return true;
    });
  }

  function updateCategoryPills() {
    document.querySelectorAll('.cat-pill').forEach(pill => {
      if (pill.dataset.category === state.filterCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Configuração dos Listeners de Eventos
  function setupEventListeners() {
    // Abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        state.activeTab = tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const catalogSection = document.getElementById('sectionCatalog');
        const previewSection = document.getElementById('sectionPreview');

        if (tab === 'catalog') {
          if (catalogSection) catalogSection.style.display = 'block';
          if (previewSection) previewSection.style.display = 'none';
        } else {
          if (catalogSection) catalogSection.style.display = 'none';
          if (previewSection) previewSection.style.display = 'block';
        }

        updateUI();
      });
    });

    // Campo de busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.filterSearch = e.target.value.trim();
        updateUI();
      });
    }

    // Filtros de Categoria
    document.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        state.filterCategory = pill.dataset.category;
        updateCategoryPills();
        updateUI();
      });
    });

    // Filtro de Fabricante
    const selectSource = document.getElementById('selectSource');
    if (selectSource) {
      selectSource.addEventListener('change', (e) => {
        state.filterSource = e.target.value;
        updateUI();
      });
    }

    // Alternar Apenas Enfileirados
    const chkOnlyQueued = document.getElementById('chkOnlyQueued');
    if (chkOnlyQueued) {
      chkOnlyQueued.addEventListener('change', (e) => {
        state.filterOnlyQueued = e.target.checked;
        updateUI();
      });
    }

    // Botão Imprimir
    const btnPrint = document.getElementById('btnPrintDirect');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        // Se estiver no catálogo, muda p/ aba preview antes de imprimir
        if (state.activeTab !== 'preview') {
          const tabPreview = document.querySelector('.tab-btn[data-tab="preview"]');
          if (tabPreview) tabPreview.click();
        }
        setTimeout(() => {
          window.print();
        }, 150);
      });
    }

    // Opções de Impressão (Linhas de Corte e Modo de Texto)
    const chkCutLines = document.getElementById('chkCutLines');
    if (chkCutLines) {
      chkCutLines.addEventListener('change', (e) => {
        state.printCutLines = e.target.checked;
        renderPrintPreview();
      });
    }

    const selectTextMode = document.getElementById('selectTextMode');
    if (selectTextMode) {
      selectTextMode.addEventListener('change', (e) => {
        state.cardTextMode = e.target.value;
        updateUI();
      });
    }

    const selectPrintTextSize = document.getElementById('selectPrintTextSize');
    if (selectPrintTextSize) {
      selectPrintTextSize.addEventListener('change', (e) => {
        state.printTextSize = e.target.value;
        renderPrintPreview();
      });
    }

    // Botão Limpar Fila
    const btnClearQueue = document.getElementById('btnClearQueue');
    if (btnClearQueue) {
      btnClearQueue.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja esvaziar toda a fila de impressão?')) {
          state.queue = {};
          saveQueue();
          updateUI();
        }
      });
    }

    // Botão Novo Card
    const btnNewCard = document.getElementById('btnNewCard');
    if (btnNewCard) {
      btnNewCard.addEventListener('click', () => {
        openCardModal();
      });
    }

    // Fechar Modal
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalClose) modalClose.addEventListener('click', closeCardModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeCardModal();
      });
    }

    // Mudança de Categoria no Modal (adapta campos)
    const modalCategory = document.getElementById('cardFormCategory');
    if (modalCategory) {
      modalCategory.addEventListener('change', (e) => {
        adaptModalFields(e.target.value);
        updateModalPreview();
      });
    }

    // Inputs no Modal disparam live-preview
    const modalForm = document.getElementById('cardEditForm');
    if (modalForm) {
      modalForm.addEventListener('input', () => {
        updateModalPreview();
      });
      modalForm.addEventListener('change', () => {
        updateModalPreview();
      });
      modalForm.addEventListener('submit', handleModalSubmit);
    }
  }

  // Ações do Modal de Criação / Edição
  function openCardModal(cardToEdit = null) {
    state.editingCard = cardToEdit;
    const modal = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    if (!modal) return;

    if (cardToEdit) {
      titleEl.textContent = `Editar Card: ${cardToEdit.name}`;
      fillModalForm(cardToEdit);
    } else {
      titleEl.textContent = 'Criar Card Personalizado';
      resetModalForm();
    }

    adaptModalFields(document.getElementById('cardFormCategory').value);
    updateModalPreview();
    modal.style.display = 'flex';
  }

  function closeCardModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) modal.style.display = 'none';
    state.editingCard = null;
  }

  function resetModalForm() {
    document.getElementById('cardFormId').value = `custom_${Date.now()}`;
    document.getElementById('cardFormCategory').value = 'action';
    document.getElementById('cardFormName').value = 'Nova Ação';
    document.getElementById('cardFormActivation').value = 'Rápida';
    document.getElementById('cardFormMount').value = 'Principal';
    document.getElementById('cardFormWeaponType').value = 'Rifle';
    document.getElementById('cardFormDamage').value = '1d6 Cinético';
    document.getElementById('cardFormRange').value = 'Alcance 10';
    document.getElementById('cardFormSP').value = '2';
    document.getElementById('cardFormTags').value = 'Precisa';
    if (document.getElementById('cardFormTextSize')) {
      document.getElementById('cardFormTextSize').value = 'md';
    }
    document.getElementById('cardFormTerse').value = 'Descrição curta ou efeito da ação.';
    document.getElementById('cardFormDetail').value = '';
    document.getElementById('cardFormSource').value = 'PILOTO';
  }

  function fillModalForm(card) {
    document.getElementById('cardFormId').value = card.id;
    document.getElementById('cardFormCategory').value = card.category;
    document.getElementById('cardFormName').value = card.name || '';
    document.getElementById('cardFormActivation').value = card.activation || 'Rápida';
    document.getElementById('cardFormMount').value = card.mount || 'Principal';
    document.getElementById('cardFormWeaponType').value = card.type || 'Rifle';
    document.getElementById('cardFormDamage').value = card.damage || '';
    document.getElementById('cardFormRange').value = card.range || '';
    document.getElementById('cardFormSP').value = card.sp !== undefined ? card.sp : '1';
    document.getElementById('cardFormTags').value = (card.tags || []).join(', ');
    if (document.getElementById('cardFormTextSize')) {
      document.getElementById('cardFormTextSize').value = card.textSize || 'md';
    }
    document.getElementById('cardFormTerse').value = card.terse || '';
    document.getElementById('cardFormDetail').value = card.detail || '';
    document.getElementById('cardFormSource').value = card.source || 'PERSONALIZADO';
  }

  function adaptModalFields(category) {
    const rowAction = document.getElementById('formRowAction');
    const rowWeapon = document.getElementById('formRowWeapon');
    const rowSystem = document.getElementById('formRowSystem');

    if (rowAction) rowAction.style.display = category === 'action' ? 'grid' : 'none';
    if (rowWeapon) rowWeapon.style.display = category === 'weapon' ? 'grid' : 'none';
    if (rowSystem) rowSystem.style.display = category === 'system' ? 'grid' : 'none';
  }

  function getCardFromModal() {
    const cat = document.getElementById('cardFormCategory').value;
    const tagsRaw = document.getElementById('cardFormTags').value;
    const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
    const textSize = document.getElementById('cardFormTextSize') ? document.getElementById('cardFormTextSize').value : 'md';

    return {
      id: document.getElementById('cardFormId').value || `custom_${Date.now()}`,
      category: cat,
      name: document.getElementById('cardFormName').value || 'Sem Nome',
      activation: document.getElementById('cardFormActivation').value,
      mount: document.getElementById('cardFormMount').value,
      type: document.getElementById('cardFormWeaponType').value,
      damage: document.getElementById('cardFormDamage').value,
      range: document.getElementById('cardFormRange').value,
      sp: parseInt(document.getElementById('cardFormSP').value, 10) || 0,
      tags: tags,
      textSize: textSize,
      terse: document.getElementById('cardFormTerse').value,
      detail: document.getElementById('cardFormDetail').value,
      source: document.getElementById('cardFormSource').value || 'CUSTOM'
    };
  }

  function updateModalPreview() {
    const previewContainer = document.getElementById('modalCardPreview');
    if (!previewContainer) return;
    const card = getCardFromModal();
    previewContainer.innerHTML = renderCardHtml(card);
  }

  function handleModalSubmit(e) {
    e.preventDefault();
    const card = getCardFromModal();

    // Se estiver editando um existente
    const existingIndex = state.allCards.findIndex(c => c.id === card.id);
    if (existingIndex >= 0) {
      state.allCards[existingIndex] = card;
    } else {
      state.allCards.unshift(card);
      state.customCards.push(card);
      saveCustomCards();
    }

    // Adiciona automaticamente à fila de impressão
    state.queue[card.id] = (state.queue[card.id] || 0) + 1;
    saveQueue();

    closeCardModal();
    updateUI();
  }

  // API pública exposta no window para botões inline
  window.LancerApp = {
    changeQty: (cardId, delta) => {
      const current = state.queue[cardId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        delete state.queue[cardId];
      } else {
        state.queue[cardId] = next;
      }
      saveQueue();
      updateUI();
    },

    editCard: (cardId) => {
      const card = state.allCards.find(c => c.id === cardId);
      if (card) openCardModal(card);
    },

    quickAddBasicActions: () => {
      const basicIds = [
        'act_move', 'act_skirmish', 'act_barrage', 'act_boost', 'act_ram',
        'act_grapple', 'act_quick_tech', 'act_full_tech', 'act_lock_on',
        'act_hide', 'act_search', 'act_stabilize', 'act_overcharge',
        'act_disengage', 'act_prepare', 'act_eject'
      ];
      let added = 0;
      state.allCards.forEach(c => {
        if (c.category === 'action' && (basicIds.includes(c.id) || !c.id.includes('npc'))) {
          state.queue[c.id] = (state.queue[c.id] || 0) + 1;
          added++;
        }
      });
      saveQueue();
      updateUI();
      alert(`Adicionadas ${added} Ações Básicas à fila de impressão!`);
    },

    quickAddStatuses: () => {
      let added = 0;
      state.allCards.forEach(c => {
        if (c.category === 'status') {
          // Status como Travado em Mira e Bloqueado são muito usados, adiciona 2 cópias
          const copies = (c.id === 'lockon' || c.id === 'impaired') ? 2 : 1;
          state.queue[c.id] = (state.queue[c.id] || 0) + copies;
          added += copies;
        }
      });
      saveQueue();
      updateUI();
      alert(`Adicionados ${added} Status e Condições à fila de impressão!`);
    },

    quickAddGmsGear: () => {
      let added = 0;
      state.allCards.forEach(c => {
        if ((c.category === 'weapon' || c.category === 'system') && c.source === 'GMS') {
          state.queue[c.id] = (state.queue[c.id] || 0) + 1;
          added++;
        }
      });
      saveQueue();
      updateUI();
      alert(`Adicionados ${added} Equipamentos GMS à fila de impressão!`);
    },

    quickAddVisible: () => {
      const filtered = getFilteredCards();
      filtered.forEach(c => {
        state.queue[c.id] = (state.queue[c.id] || 0) + 1;
      });
      saveQueue();
      updateUI();
      alert(`Adicionados ${filtered.length} cards visíveis à fila!`);
    }
  };

})();
