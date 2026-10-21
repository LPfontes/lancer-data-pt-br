/**
 * editor.js - Lógica do Editor Direto (WYSIWYG) de Cards para LANCER RPG
 */

(function () {
  'use strict';

  let allDatabaseCards = [];
  let currentCard = {
    id: `custom_${Date.now()}`,
    category: 'weapon',
    badgeText: 'ARMA',
    name: 'Arma Corpo a Corpo Pesada',
    stat1Val: '1',
    stat1Label: 'AMEAÇA',
    stat2Val: '2d6+1',
    stat2Label: 'CINÉTICO',
    metaTitle: 'Pesado Corpo a Corpo',
    metaLicense: 'GMS 0',
    tags: [],
    effect: 'Assim como os mechas da SMG, as armas da SMG são padrões galácticos confiáveis, feitas com peças intercambiáveis e construídas para suportar quase todas as condições. Existem três linhas atualmente em produção.\\nA linha Tipo-I (T-1) é definida por armas de longo Alcance e corpo a corpo cinéticas convencionais, poderosas e confiáveis, incluindo o fuzil de assalto SMG, metralhadora pesada, escopeta, pistola e várias lâminas leves e pesadas. Padrões galácticos confiáveis, a linha T-1 da SMG é a linha de armamento em escala de mecha mais amplamente utilizada em toda a galáxia. Ecoando as notas de design do Evereste, as armas T-1 são projetadas de forma simples, com poucas (se houver) peças móveis, destinadas a serem usadas ou adaptáveis a qualquer ambiente.',
    detail: '',
    showDetail: false,
    textSize: 'md',
    footerLeft: 'GMS // NV 0',
    footerRight: 'LANCER // PT-BR'
  };

  const BASE_SCALE = 2.5; // 250% é o 100% base
  let zoomPercent = 100;   // 100% padrão

  document.addEventListener('DOMContentLoaded', async () => {
    await initData();
    setupEventListeners();

    // Checar se há ID na URL para carregar diretamente (ex: editor.html?id=act_skirmish)
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id');
    if (cardId) {
      loadCardById(cardId);
    } else {
      renderCardDirect();
    }

    updateZoom();
  });

  async function initData() {
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
      } catch (e) {
        console.warn('Erro ao carregar compêndio:', e);
      }
    }

    if (rawData) {
      const tagMap = {};
      if (rawData.tags) rawData.tags.forEach(t => { tagMap[t.id] = t.name || t.id; });

      // Normalizar Ações
      const acts = (rawData.actions || []).map(a => ({
        id: a.id,
        category: 'action',
        badgeText: 'AÇÃO',
        name: a.name,
        stat1Val: a.activation || 'Ação',
        stat1Label: 'ATIVAÇÃO',
        stat2Val: '',
        stat2Label: '',
        metaTitle: 'AÇÃO DE COMBATE',
        metaLicense: 'REGRAS BÁSICAS',
        tags: [],
        effect: cleanText(a.terse) || cleanText(a.detail),
        detail: cleanText(a.detail),
        footerLeft: 'REGRAS BÁSICAS',
        footerRight: 'LANCER // PT-BR'
      }));

      // Normalizar Armas
      const wps = (rawData.weapons || []).map(w => {
        let stat1Val = w.range_val || '-';
        let stat1Label = (w.range_type || 'ALCANCE').toUpperCase();
        if (w.range && Array.isArray(w.range) && w.range.length) {
          stat1Val = w.range[0].val;
          const rType = (w.range[0].type || '').toLowerCase();
          stat1Label = rType.includes('threat') ? 'AMEAÇA' : 'ALCANCE';
        }

        let stat2Val = w.damage_val || '-';
        let stat2Label = (w.damage_type || 'DANO').toUpperCase();
        if (w.damage && Array.isArray(w.damage) && w.damage.length) {
          stat2Val = w.damage[0].val;
          const dmgType = (w.damage[0].type || '').toUpperCase();
          stat2Label = dmgType.includes('KINETIC') ? 'CINÉTICO' :
                       dmgType.includes('EXPLOSIVE') ? 'EXPLOSIVO' :
                       dmgType.includes('ENERGY') ? 'ENERGÉTICO' :
                       dmgType.includes('BURN') ? 'QUEIMADURA' :
                       dmgType.includes('HEAT') ? 'CALOR' : dmgType;
        }

        const tagsList = (w.tags || []).map(t => {
          if (typeof t === 'string') return t;
          let name = tagMap[t.id] || t.id.replace(/^tg_/, '');
          if (t.val !== undefined) name = name.replace('{VAL}', t.val);
          return name;
        });

        return {
          id: w.id,
          category: 'weapon',
          badgeText: 'ARMA',
          name: w.name,
          stat1Val: stat1Val,
          stat1Label: stat1Label,
          stat2Val: stat2Val,
          stat2Label: stat2Label,
          metaTitle: `${w.mount || 'Principal'} ${w.type || 'Arma'}`,
          metaLicense: `${w.source || 'GMS'} ${w.license_level !== undefined ? w.license_level : 0}`,
          tags: tagsList,
          effect: cleanText(w.terse || w.effect || w.description),
          detail: cleanText(w.detail || w.description || w.effect),
          footerLeft: `${w.source || 'GMS'}${w.license ? ` // ${w.license}` : ''}`,
          footerRight: 'LANCER // PT-BR'
        };
      });

      // Normalizar Sistemas
      const syss = (rawData.systems || []).map(s => {
        const tagsList = (s.tags || []).map(t => {
          if (typeof t === 'string') return t;
          let name = tagMap[t.id] || t.id.replace(/^tg_/, '');
          if (t.val !== undefined) name = name.replace('{VAL}', t.val);
          return name;
        });

        return {
          id: s.id,
          category: 'system',
          badgeText: 'SISTEMA',
          name: s.name,
          stat1Val: `${s.sp || 0} SP`,
          stat1Label: 'CUSTO SISTEMA',
          stat2Val: s.type || 'Sistema',
          stat2Label: 'TIPO',
          metaTitle: 'SISTEMA TÁTICO',
          metaLicense: `${s.source || 'GMS'} ${s.license_level !== undefined ? s.license_level : 0}`,
          tags: tagsList,
          effect: cleanText(s.terse || s.effect || s.description),
          detail: cleanText(s.detail || s.description || s.effect),
          footerLeft: `${s.source || 'GMS'}${s.license ? ` // ${s.license}` : ''}`,
          footerRight: 'LANCER // PT-BR'
        };
      });

      // Normalizar Status / Condições
      const stats = (rawData.statuses || []).map(st => {
        const isCond = st.type && st.type.toLowerCase().includes('cond');
        const stType = isCond ? 'Condição' : 'Status';

        return {
          id: st.id,
          category: 'status',
          badgeText: isCond ? 'CONDIÇÃO' : 'STATUS',
          name: st.name,
          stat1Val: stType,
          stat1Label: 'CLASSIFICAÇÃO',
          stat2Val: st.exclusive || 'GERAL',
          stat2Label: 'ALVO',
          metaTitle: 'ESTADO TÁTICO',
          metaLicense: 'REGRAS BÁSICAS',
          tags: [],
          effect: cleanText(st.terse) || cleanText(st.effects),
          detail: cleanText(st.effects),
          footerLeft: 'REGRAS BÁSICAS',
          footerRight: 'LANCER // PT-BR'
        };
      });

      // Carregar também cards personalizados do usuário
      let custom = [];
      try {
        const savedCustom = localStorage.getItem('lancer_custom_cards');
        if (savedCustom) custom = JSON.parse(savedCustom);
      } catch (e) {}

      allDatabaseCards = [...acts, ...wps, ...syss, ...stats, ...custom];
      populateCardSelector();
    }
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

  function populateCardSelector() {
    const select = document.getElementById('selectLoadCard');
    if (!select) return;

    select.innerHTML = '<option value="">-- Carregar do Compêndio --</option>';

    const groups = {
      action: document.createElement('optgroup'),
      weapon: document.createElement('optgroup'),
      system: document.createElement('optgroup'),
      status: document.createElement('optgroup')
    };

    groups.action.label = 'Ações';
    groups.weapon.label = 'Armas';
    groups.system.label = 'Sistemas';
    groups.status.label = 'Status & Condições';

    allDatabaseCards.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.name;
      if (groups[c.category]) {
        groups[c.category].appendChild(opt);
      }
    });

    Object.values(groups).forEach(g => {
      if (g.children.length > 0) select.appendChild(g);
    });
  }

  const TEXT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

  function setTextSize(newSize) {
    if (!TEXT_SIZES.includes(newSize)) newSize = 'md';
    currentCard.textSize = newSize;

    const cardEl = document.getElementById('liveEditableCard');
    if (cardEl) {
      TEXT_SIZES.forEach(s => cardEl.classList.remove(`text-size-${s}`));
      cardEl.classList.add(`text-size-${newSize}`);
    }

    updateTextSizeUI();
  }

  function updateTextSizeUI() {
    const size = currentCard.textSize || 'md';
    const selToolbar = document.getElementById('selectCardTextSize');
    const selSidebar = document.getElementById('sidebarTextSize');
    if (selToolbar && selToolbar.value !== size) selToolbar.value = size;
    if (selSidebar && selSidebar.value !== size) selSidebar.value = size;
  }

  function loadCardById(id) {
    const found = allDatabaseCards.find(c => c.id === id);
    if (found) {
      currentCard = JSON.parse(JSON.stringify(found));
      if (!currentCard.textSize) currentCard.textSize = 'md';
      renderCardDirect();
      updateCategoryButtonsUI();
      updateTextSizeUI();
    }
  }

  // Renderiza o card no palco com o modelo COMP/CON
  function renderCardDirect() {
    const stage = document.getElementById('editorCardCanvas');
    if (!stage) return;

    const catClass = `card-${currentCard.category}`;
    const sizeClass = `text-size-${currentCard.textSize || 'md'}`;
    const icons = window.CC_ICONS || {};

    let headerLogoSvg = icons.gms || '';
    if (currentCard.category === 'action') headerLogoSvg = icons.action || '';
    if (currentCard.category === 'system') headerLogoSvg = icons.system || '';
    if (currentCard.category === 'status') headerLogoSvg = icons.status || '';

    // Ícones dos stats
    let stat1Svg = icons.range || '';
    if (currentCard.category === 'action') stat1Svg = icons.action || '';
    if (currentCard.category === 'system') stat1Svg = icons.system || '';
    if (currentCard.category === 'status') stat1Svg = icons.status || '';
    if (currentCard.stat1Label && currentCard.stat1Label.toUpperCase().includes('AMEAÇA')) {
      stat1Svg = icons.threat || '';
    }

    let stat2Svg = icons.kinetic || '';
    if (currentCard.stat2Label) {
      const lbl = currentCard.stat2Label.toLowerCase();
      if (lbl.includes('cinét') || lbl.includes('kinet')) stat2Svg = icons.kinetic || '';
      else if (lbl.includes('explos')) stat2Svg = icons.explosive || '';
      else if (lbl.includes('energ')) stat2Svg = icons.energy || '';
      else if (lbl.includes('queim') || lbl.includes('burn')) stat2Svg = icons.burn || '';
      else if (lbl.includes('calor') || lbl.includes('heat')) stat2Svg = icons.heat || '';
    }

    // Montar tags
    const tagsHtml = (currentCard.tags || []).map((t, idx) => `
      <span class="cc-tag-chip editable-tag" data-tag-idx="${idx}">
        <b class="tag-text" contenteditable="true" spellcheck="false">${t}</b>
        <span class="btn-chip-remove" onclick="window.EditorApp.removeTag(${idx})" title="Remover">&times;</span>
      </span>
    `).join('');

    let stat2BlockHtml = '';
    if (currentCard.category !== 'action' && (currentCard.stat2Label || currentCard.stat2Val)) {
      stat2BlockHtml = `
        <div class="cc-stat-block">
          <div class="cc-stat-top">
            <span class="cc-stat-svg" style="color:var(--color-${currentCard.category}-border);">${stat2Svg}</span>
          </div>
          <div class="cc-stat-overline" id="cardStatLabel2" contenteditable="true" spellcheck="false" title="Clique para editar rótulo">${currentCard.stat2Label || 'CINÉTICO'}</div>
        </div>
      `;
    }

    stage.innerHTML = `
      <div class="lancer-card cc-model ${catClass} ${sizeClass}" id="liveEditableCard">
        
        <!-- CABEÇALHO COMP/CON -->
        <div class="cc-header">
          <div class="cc-header-logo">${headerLogoSvg}</div>
          <div class="cc-header-title" id="cardTitle" contenteditable="true" spellcheck="false" title="Clique para editar o título">${currentCard.name || 'Título do Card'}</div>
          <div class="cc-header-book">${icons.book || ''}</div>
        </div>

        <!-- LINHA DE ESTATÍSTICAS -->
        <div class="cc-stats-row">
          <div class="cc-stat-block">
            <div class="cc-stat-top">
              <span class="cc-stat-svg">${stat1Svg}</span>
              <span class="cc-stat-num" id="cardStatVal1" contenteditable="true" spellcheck="false" title="Clique para editar">${currentCard.stat1Val || '1'}</span>
            </div>
            <div class="cc-stat-overline" id="cardStatLabel1" contenteditable="true" spellcheck="false" title="Clique para editar rótulo">${currentCard.stat1Label || 'AMEAÇA'}</div>
          </div>

          ${stat2BlockHtml}

          <div class="cc-meta-block">
            <div class="cc-meta-title" id="cardMetaTitle" contenteditable="true" spellcheck="false" title="Clique para editar tipo/encaixe">${currentCard.metaTitle || 'Pesado Corpo a Corpo'}</div>
            <div class="cc-meta-license" id="cardMetaLicense" contenteditable="true" spellcheck="false" title="Clique para editar licença">${currentCard.metaLicense || 'GMS 0'}</div>
          </div>
        </div>

        <!-- LINHA DE TAGS -->
        <div class="cc-tags-row" id="cardTagsRow">
          ${tagsHtml}
        </div>

        <!-- DIVISOR COM ÍCONE -->
        <div class="cc-divider-row">
          <div class="cc-divider-line"></div>
          <div class="cc-divider-icon">${icons.divider || ''}</div>
          <div class="cc-divider-line"></div>
        </div>

        <!-- SEÇÃO DO COMPÊNDIO -->
        <div class="cc-compendium-section">
          <div class="cc-overline" contenteditable="true" spellcheck="false">//Dados do compêndio</div>
          <div class="cc-flavor-text" id="cardEffectText" contenteditable="true" spellcheck="false" title="Clique para editar o texto">
            ${currentCard.effect || 'Digite os dados do compêndio diretamente aqui...'}
          </div>
        </div>

      </div>
    `;

    bindContentEditableEvents();
    updateSidebarTextInputs();
    updateTextSizeUI();
  }

  function updateSidebarTextInputs() {
    const sideEffect = document.getElementById('sidebarTextEffect');
    const sideDetail = document.getElementById('sidebarTextDetail');
    if (sideEffect && document.activeElement !== sideEffect) {
      sideEffect.value = currentCard.effect || '';
    }
    if (sideDetail && document.activeElement !== sideDetail) {
      sideDetail.value = currentCard.detail || '';
    }
  }

  // Captura as alterações digitadas diretamente nos elementos
  function bindContentEditableEvents() {
    const cardEl = document.getElementById('liveEditableCard');
    if (!cardEl) return;

    // Sincronização automática com currentCard
    cardEl.addEventListener('input', (e) => {
      syncCardModelFromDOM();
    });
  }

  function syncCardModelFromDOM() {
    const titleEl = document.getElementById('cardTitle');
    if (titleEl) currentCard.name = titleEl.innerText.trim();

    const statVal1El = document.getElementById('cardStatVal1');
    if (statVal1El) currentCard.stat1Val = statVal1El.innerText.trim();

    const statLabel1El = document.getElementById('cardStatLabel1');
    if (statLabel1El) currentCard.stat1Label = statLabel1El.innerText.trim();

    const statLabel2El = document.getElementById('cardStatLabel2');
    if (statLabel2El) currentCard.stat2Label = statLabel2El.innerText.trim();

    const metaTitleEl = document.getElementById('cardMetaTitle');
    if (metaTitleEl) currentCard.metaTitle = metaTitleEl.innerText.trim();

    const metaLicenseEl = document.getElementById('cardMetaLicense');
    if (metaLicenseEl) currentCard.metaLicense = metaLicenseEl.innerText.trim();

    const effectEl = document.getElementById('cardEffectText');
    if (effectEl) currentCard.effect = effectEl.innerHTML.trim();

    // Sincronizar tags
    document.querySelectorAll('.cc-tag-chip[data-tag-idx]').forEach(el => {
      const idx = parseInt(el.dataset.tagIdx, 10);
      const txt = el.querySelector('.tag-text');
      if (txt && currentCard.tags[idx] !== undefined) {
        currentCard.tags[idx] = txt.innerText.trim();
      }
    });

    updateSidebarTextInputs();
  }

  function setCategory(cat) {
    currentCard.category = cat;

    // Atualiza o texto do badge se for o padrão
    if (cat === 'action') {
      currentCard.badgeText = 'AÇÃO';
      currentCard.stat1Label = 'ATIVAÇÃO';
      currentCard.stat1Val = currentCard.stat1Val || 'Rápida';
      currentCard.stat2Val = '';
      currentCard.stat2Label = '';
      currentCard.metaTitle = 'AÇÃO DE COMBATE';
      currentCard.metaLicense = 'REGRAS BÁSICAS';
    } else if (cat === 'weapon') {
      currentCard.badgeText = 'ARMA';
      currentCard.stat1Label = 'ALCANCE';
      currentCard.stat2Label = 'CINÉTICO';
    } else if (cat === 'system') {
      currentCard.badgeText = 'SISTEMA';
      currentCard.stat1Label = 'CUSTO SISTEMA';
      currentCard.stat2Label = 'TIPO';
    } else if (cat === 'status') {
      currentCard.badgeText = 'STATUS';
      currentCard.stat1Label = 'CLASSIFICAÇÃO';
      currentCard.stat2Label = 'ALVO';
    }

    renderCardDirect();
    updateCategoryButtonsUI();
  }

  function updateCategoryButtonsUI() {
    document.querySelectorAll('.color-btn').forEach(btn => {
      if (btn.dataset.cat === currentCard.category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function updateZoom() {
    const wrapper = document.getElementById('stageWrapper');
    const label = document.getElementById('zoomLevelLabel');
    const scaleFactor = BASE_SCALE * (zoomPercent / 100);
    if (wrapper) {
      wrapper.style.transform = `scale(${scaleFactor})`;
    }
    if (label) {
      label.textContent = `${zoomPercent}%`;
    }
  }

  function setupEventListeners() {
    // Sincronização do Editor de Texto da Barra Lateral
    const sideEffect = document.getElementById('sidebarTextEffect');
    if (sideEffect) {
      sideEffect.addEventListener('input', (e) => {
        currentCard.effect = e.target.value;
        const cardEffect = document.getElementById('cardEffectText');
        if (cardEffect) cardEffect.innerHTML = currentCard.effect;
      });
    }

    const sideDetail = document.getElementById('sidebarTextDetail');
    if (sideDetail) {
      sideDetail.addEventListener('input', (e) => {
        currentCard.detail = e.target.value;
        const cardDetail = document.getElementById('cardDetailText');
        if (cardDetail) cardDetail.innerText = currentCard.detail;
      });
    }

    // Botões da Barra de Formatação de Texto
    const btnBold = document.getElementById('btnFormatBold');
    if (btnBold) {
      btnBold.addEventListener('click', () => {
        document.execCommand('bold', false, null);
        syncCardModelFromDOM();
      });
    }

    const btnItalic = document.getElementById('btnFormatItalic');
    if (btnItalic) {
      btnItalic.addEventListener('click', () => {
        document.execCommand('italic', false, null);
        syncCardModelFromDOM();
      });
    }

    const btnList = document.getElementById('btnFormatList');
    if (btnList) {
      btnList.addEventListener('click', () => {
        document.execCommand('insertUnorderedList', false, null);
        syncCardModelFromDOM();
      });
    }

    const btnClear = document.getElementById('btnFormatClear');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        document.execCommand('removeFormat', false, null);
        syncCardModelFromDOM();
      });
    }

    // Seletores e Controles de Tamanho do Texto
    const selCardTextSize = document.getElementById('selectCardTextSize');
    if (selCardTextSize) {
      selCardTextSize.addEventListener('change', (e) => {
        setTextSize(e.target.value);
      });
    }

    const selSidebarTextSize = document.getElementById('sidebarTextSize');
    if (selSidebarTextSize) {
      selSidebarTextSize.addEventListener('change', (e) => {
        setTextSize(e.target.value);
      });
    }

    const btnSizeDown = document.getElementById('btnTextSizeDown');
    if (btnSizeDown) {
      btnSizeDown.addEventListener('click', () => {
        const cur = currentCard.textSize || 'md';
        const idx = TEXT_SIZES.indexOf(cur);
        if (idx > 0) {
          setTextSize(TEXT_SIZES[idx - 1]);
        }
      });
    }

    const btnSizeUp = document.getElementById('btnTextSizeUp');
    if (btnSizeUp) {
      btnSizeUp.addEventListener('click', () => {
        const cur = currentCard.textSize || 'md';
        const idx = TEXT_SIZES.indexOf(cur);
        if (idx >= 0 && idx < TEXT_SIZES.length - 1) {
          setTextSize(TEXT_SIZES[idx + 1]);
        }
      });
    }

    // Seletor de Carregar Card
    const selectLoad = document.getElementById('selectLoadCard');
    if (selectLoad) {
      selectLoad.addEventListener('change', (e) => {
        if (e.target.value) {
          loadCardById(e.target.value);
        }
      });
    }

    // Botões de Categoria / Cor na Barra Lateral
    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setCategory(btn.dataset.cat);
      });
    });

    // Controles de Zoom
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnZoomReset = document.getElementById('btnZoomReset');

    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => {
        if (zoomPercent < 200) {
          zoomPercent += 25;
          updateZoom();
        }
      });
    }

    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => {
        if (zoomPercent > 50) {
          zoomPercent -= 25;
          updateZoom();
        }
      });
    }

    if (btnZoomReset) {
      btnZoomReset.addEventListener('click', () => {
        zoomPercent = 100;
        updateZoom();
      });
    }

    // Botão Novo / Limpar
    const btnNew = document.getElementById('btnNewBlank');
    if (btnNew) {
      btnNew.addEventListener('click', () => {
        if (confirm('Criar um novo card em branco?')) {
          currentCard = {
            id: `custom_${Date.now()}`,
            category: 'action',
            badgeText: 'AÇÃO',
            name: 'Nova Ação',
            stat1Val: 'Rápida',
            stat1Label: 'ATIVAÇÃO',
            stat2Val: '',
            stat2Label: '',
            metaTitle: 'AÇÃO DE COMBATE',
            metaLicense: 'REGRAS BÁSICAS',
            tags: ['Nova'],
            effect: 'Clique aqui e digite o efeito do card diretamente.',
            detail: 'Informações detalhadas adicionais.',
            showDetail: true,
            textSize: 'md',
            quote: '',
            showQuote: false,
            footerLeft: 'PERSONALIZADO',
            footerRight: 'LANCER // PT-BR'
          };
          renderCardDirect();
          updateCategoryButtonsUI();
          updateTextSizeUI();
        }
      });
    }

    // Botão Salvar
    const btnSave = document.getElementById('btnSaveCard');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        syncCardModelFromDOM();

        // Salvar no localStorage de custom cards
        let customs = [];
        try {
          const raw = localStorage.getItem('lancer_custom_cards');
          if (raw) customs = JSON.parse(raw);
        } catch (e) {}

        const existingIdx = customs.findIndex(c => c.id === currentCard.id);
        if (existingIdx >= 0) {
          customs[existingIdx] = currentCard;
        } else {
          customs.unshift(currentCard);
        }

        try {
          localStorage.setItem('lancer_custom_cards', JSON.stringify(customs));
          alert(`Card "${currentCard.name}" salvo com sucesso!`);
        } catch (e) {
          alert('Erro ao salvar no navegador.');
        }
      });
    }

    // Botão Adicionar à Fila de Impressão
    const btnAddQueue = document.getElementById('btnAddQueue');
    if (btnAddQueue) {
      btnAddQueue.addEventListener('click', () => {
        syncCardModelFromDOM();

        let queue = {};
        try {
          const raw = localStorage.getItem('lancer_print_queue');
          if (raw) queue = JSON.parse(raw);
        } catch (e) {}

        queue[currentCard.id] = (queue[currentCard.id] || 0) + 1;

        // Salvar também em custom cards para garantir persistência na fila
        let customs = [];
        try {
          const raw = localStorage.getItem('lancer_custom_cards');
          if (raw) customs = JSON.parse(raw);
        } catch (e) {}

        const existingIdx = customs.findIndex(c => c.id === currentCard.id);
        if (existingIdx >= 0) {
          customs[existingIdx] = currentCard;
        } else {
          customs.unshift(currentCard);
        }

        localStorage.setItem('lancer_custom_cards', JSON.stringify(customs));
        localStorage.setItem('lancer_print_queue', JSON.stringify(queue));

        alert(`Card "${currentCard.name}" adicionado à fila de impressão!`);
      });
    }

    // Botão Imprimir
    const btnPrint = document.getElementById('btnPrintSingle');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        syncCardModelFromDOM();
        window.print();
      });
    }

    // Botões de Adicionar Chips e Tags
    const btnAddDmg = document.getElementById('btnAddDmgStat');
    if (btnAddDmg) {
      btnAddDmg.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.stats.push({ type: 'stat-dmg', text: '1d6 Cinético' });
        renderCardDirect();
      });
    }

    const btnAddRng = document.getElementById('btnAddRngStat');
    if (btnAddRng) {
      btnAddRng.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.stats.push({ type: 'stat-range', text: 'Alcance 10' });
        renderCardDirect();
      });
    }

    const btnAddSp = document.getElementById('btnAddSpStat');
    if (btnAddSp) {
      btnAddSp.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.stats.push({ type: 'stat-sp', text: '2 SP' });
        renderCardDirect();
      });
    }

    const btnAddAct = document.getElementById('btnAddActStat');
    if (btnAddAct) {
      btnAddAct.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.stats.push({ type: 'stat-act', text: 'Rápida' });
        renderCardDirect();
      });
    }

    const btnAddTag = document.getElementById('btnAddTag');
    if (btnAddTag) {
      btnAddTag.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.tags.push('Nova Tag');
        renderCardDirect();
      });
    }

    const btnToggleDetail = document.getElementById('btnToggleDetail');
    if (btnToggleDetail) {
      btnToggleDetail.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.showDetail = !currentCard.showDetail;
        renderCardDirect();
      });
    }

    const btnToggleQuote = document.getElementById('btnToggleQuote');
    if (btnToggleQuote) {
      btnToggleQuote.addEventListener('click', () => {
        syncCardModelFromDOM();
        currentCard.showQuote = !currentCard.showQuote;
        if (currentCard.showQuote && !currentCard.quote) {
          currentCard.quote = 'TRANSMISSÃO RECEBIDA.';
        }
        renderCardDirect();
      });
    }
  }

  // Funções expostas para remoção de chips e tags
  window.EditorApp = {
    removeStat: (idx) => {
      syncCardModelFromDOM();
      currentCard.stats.splice(idx, 1);
      renderCardDirect();
    },
    removeTag: (idx) => {
      syncCardModelFromDOM();
      currentCard.tags.splice(idx, 1);
      renderCardDirect();
    },
    setTextSize: (size) => {
      setTextSize(size);
    }
  };

})();
